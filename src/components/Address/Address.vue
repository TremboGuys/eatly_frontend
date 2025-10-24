<script setup>
import { ref } from 'vue'

const rua = ref('')
const numero = ref('')
const bairro = ref('')
const cidade = ref('')
const sugestoes = ref([])
const enderecos = ref([])

let timeout = null

function selecionarCidade(nome) {
  cidade.value = nome
  sugestoes.value = []
}

function adicionarEndereco() {
  if (!rua.value || !numero.value || !bairro.value || !cidade.value) return

  enderecos.value.push({
    rua: rua.value,
    numero: numero.value,
    bairro: bairro.value,
    cidade: cidade.value,
  })

  rua.value = ''
  numero.value = ''
  bairro.value = ''
  cidade.value = ''
  sugestoes.value = []
}

function removerEndereco(index) {
  enderecos.value.splice(index, 1)
}
</script>

<template>
  <div class="registration-container">
    <div class="card-modern">
      <h2 class="title-modern">
        <span class="icon-address"></span>
        Cadastrar Endereço
      </h2>

      <div class="content-wrapper">
        <section class="form-section">
          <h3 class="section-title">Novo Endereço</h3>

          <form class="form-modern" @submit.prevent="adicionarEndereco">
            <div class="form-group-modern">
              <label for="rua">Rua</label>
              <input id="rua" v-model="rua" type="text" placeholder="Digite a rua" />
            </div>

            <div class="form-group-modern">
              <label for="numero">Número</label>
              <input id="numero" v-model="numero" type="text" placeholder="Ex: 123" />
            </div>

            <div class="form-group-modern">
              <label for="bairro">Bairro</label>
              <input id="bairro" v-model="bairro" type="text" placeholder="Digite o bairro" />
            </div>

            <div class="form-group-modern autocomplete-wrapper">
              <label for="cidade">Cidade</label>
              <input
                id="cidade"
                v-model="cidade"
                type="text"
                placeholder="Digite a cidade"
                @input="buscarCidades"
                autocomplete="off"
              />
              <ul v-if="sugestoes.length > 0" class="autocomplete-list">
                <li
                  v-for="(sugestao, index) in sugestoes"
                  :key="index"
                  @click="selecionarCidade(sugestao)"
                >
                  {{ sugestao }}
                </li>
              </ul>
            </div>

            <button type="submit" class="btn-primary">Adicionar</button>
          </form>
        </section>

        <section class="list-section">
          <h3 class="section-title">Endereços Cadastrados</h3>

          <div class="list-wrapper">
            <p v-if="enderecos.length === 0" class="empty-message">
              Nenhum endereço cadastrado.
            </p>

            <ul v-else class="address-list">
              <li v-for="(endereco, index) in enderecos" :key="index" class="address-item">
                <span class="address-text">
                  {{ endereco.rua }}, {{ endereco.numero }} - {{ endereco.bairro }},
                  {{ endereco.cidade }}
                </span>
                <button class="btn-remove" @click="removerEndereco(index)">
                   Remover
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";

.registration-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
  padding: 40px 10px;
}

.card-modern {
  width: 100%;
  max-width: 900px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.title-modern {
  color: #444801;
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 30px;
  padding-bottom: 10px;
  font-family: 'Poppins', sans-serif;
}

.content-wrapper {
  display: flex;
  gap: 40px;
}

.form-section,
.list-section {
  flex: 1;
  padding: 10px;
}

.section-title {
  color: #444801;
  font-size: 1rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  font-family: 'Poppins', sans-serif;
}

.form-modern {
  display: flex;
  flex-direction: column;
  gap: 15px;

  .form-group-modern {
    display: flex;
    flex-direction: column;

    label {
      color: #666;
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 0.9rem;
    }

    input {
      padding: 10px 14px;
      font-size: 1rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      outline: none;
      transition: all 0.3s;

      &:focus {
        border-color: #8a8d36;
        box-shadow: 0 0 0 3px rgba(138, 141, 54, 0.2);
      }
    }
  }

  .btn-primary {
    background-color: #8a8d36;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #72762d;
    }
  }
}

.autocomplete-wrapper {
  position: relative;
}

.autocomplete-list {
  margin-top: 5px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 10;

  li {
    padding: 10px 15px;
    cursor: pointer;
    color: #333;

    &:hover {
      background-color: #f2f2f2;
    }
  }
}

.list-wrapper {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
}

.empty-message {
  color: #666;
  text-align: center;
  padding: 20px 0;
  font-style: italic;
  border: 1px dashed #ddd;
  border-radius: 6px;
  background-color: #ffffff;
}

.address-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .address-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-left: 5px solid #8a8d36;
    border-radius: 6px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .address-text {
      color: #333;
      font-weight: 500;
    }

    .btn-remove {
      background-color: #999;
      color: #fff;
      border: none;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #777;
      }
    }
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .list-section {
    margin-top: 20px;
  }
}
</style>
