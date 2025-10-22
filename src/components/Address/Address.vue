<script setup>
import { ref } from 'vue'

const rua = ref('')
const numero = ref('')
const bairro = ref('')
const cidade = ref('')
const sugestoes = ref([])
const enderecos = ref([])

let timeout = null

async function buscarCidades() {
  clearTimeout(timeout)
  if (cidade.value.length < 3) {
    sugestoes.value = []
    return
  }

  timeout = setTimeout(async () => {
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/municipios`
      )
      const data = await response.json()
      const filtro = cidade.value.toLowerCase()
      sugestoes.value = data
        .map((c) => c.nome)
        .filter((nome) => nome.toLowerCase().startsWith(filtro))
        .slice(0, 8)
    } catch (error) {
      console.error('Erro ao buscar cidades:', error)
    }
  }, 400)
}

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
                  <span class="icon-trash"></span>
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

$primary: #8a8d36;
$primary-dark: #444801;
$text-dark: #333;
$text-secondary: #666;
$text-light: #fff;
$bg-light: #f9f9f9;
$border: #ddd;
$radius: 8px;

$card-bg: #ffffff;
$secondary-action: #9e9e9e;
$secondary-action-dark: #757575;

.registration-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: $bg-light;
  font-family: 'Poppins', sans-serif;
}

.card-modern {
  width: 100%;
  max-width: 900px;
  background-color: $card-bg;
  border-radius: $radius;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.title-modern {
  color: $primary-dark;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  border-bottom: 2px solid $border;
  padding-bottom: 15px;
}

.content-wrapper {
  display: flex;
  gap: 40px;
}

.form-section,
.list-section {
  flex: 1;
  padding: 20px;
  border-radius: $radius;
  border: 1px solid $border;
  background-color: $bg-light;
}

.section-title {
  color: $primary-dark;
  font-size: 1.25rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px dashed $border;
}

.form-modern {
  display: flex;
  flex-direction: column;
  gap: 15px;

  .form-group-modern {
    display: flex;
    flex-direction: column;

    label {
      color: $text-secondary;
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 0.9rem;
    }

    input {
      padding: 12px 15px;
      font-size: 1rem;
      border: 1px solid $border;
      border-radius: math.div($radius, 2);
      outline: none;
      transition: all 0.3s;

      &:focus {
        border-color: $primary;
        box-shadow: 0 0 0 3px rgba($primary, 0.2);
      }
    }
  }

  .btn-primary {
    background-color: $primary;
    color: $text-light;
    border: none;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: math.div($radius, 2);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s;
    margin-top: 10px;

    &:hover {
      background-color: $primary-dark;
      box-shadow: 0 4px 10px rgba($primary, 0.3);
    }

    &:active {
      transform: scale(0.98);
    }
  }
}

.autocomplete-list {
  margin-top: 5px;
  background-color: $card-bg;
  border: 1px solid $border;
  border-radius: math.div($radius, 2);
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
    color: $text-dark;

    &:hover {
      background-color: $bg-light;
    }
  }
}

.autocomplete-wrapper {
  position: relative;
}

.list-wrapper {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
}

.empty-message {
  color: $text-secondary;
  text-align: center;
  padding: 20px 0;
  font-style: italic;
  border: 1px dashed $border;
  border-radius: math.div($radius, 2);
  background-color: $card-bg;
}

.address-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .address-item {
    background-color: $card-bg;
    border: 1px solid $border;
    border-left: 5px solid $primary;
    border-radius: math.div($radius, 2);
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .address-text {
      color: $text-dark;
      font-weight: 500;
    }

    .btn-remove {
      background-color: $secondary-action;
      color: $text-light;
      border: none;
      padding: 6px 10px;
      border-radius: math.div($radius, 2);
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: $secondary-action-dark;
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

