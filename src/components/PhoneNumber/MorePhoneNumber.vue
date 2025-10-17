<template>
  <div class="registration-container">
    <div class="card-modern">
      <h1 class="title-modern">
        <i class="icon-phone"></i> Cadastro de Telefones
      </h1>

      <div class="content-wrapper">
        <div class="form-section">
          <h2 class="section-title">Adicionar Novo Telefone</h2>
          <form @submit.prevent="adicionarTelefone" class="form-modern">
            <div class="form-group-modern">
              <label for="telefone">Número</label>
              <input
                id="telefone"
                v-model="novoTelefone"
                type="text"
                placeholder="(99) 99999-9999"
              />
            </div>
            <button type="submit" class="btn-primary">Adicionar Telefone</button>
          </form>
        </div>

        <div class="list-section">
          <h2 class="section-title">Telefones Cadastrados ({{ telefones.length }})</h2>
          <div class="list-wrapper">
            <p v-if="!telefones.length" class="empty-message">
              Nenhum telefone cadastrado ainda.
            </p>
            <ul class="phone-list" v-else>
              <li v-for="(tel, index) in telefones" :key="index" class="phone-item">
                <span class="phone-number">{{ tel }}</span>
                <button @click="removerTelefone(index)" class="btn-remove">
                  <i class="icon-trash"></i> Remover
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const novoTelefone = ref('')
const telefones = ref([])

function adicionarTelefone() {
  const telefone = novoTelefone.value.trim()
  if (telefone) {
    // Adiciona apenas se não estiver vazio
    if (!telefones.value.includes(telefone)) {
      telefones.value.push(telefone)
    } else {
      alert(`O telefone ${telefone} já está na lista.`)
    }
    novoTelefone.value = ''
  }
}

function removerTelefone(index) {
  telefones.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
// 🎨 Paleta de Cores (Original)
$primary: #8a8d36;          // Verde Musgo Principal
$primary-dark: #444801;     // Verde Musgo Escuro
$text-dark: #333;
$text-secondary: #666;
$text-light: #fff;
$bg-light: #f9f9f9;
$border: #ddd;
$radius: 8px; // Usando 8px para o novo design

// Cores adicionais para o design moderno
$card-bg: #ffffff;
$secondary-action: #9e9e9e; // Cinza para o botão de remover
$secondary-action-dark: #757575;

.registration-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: $bg-light;
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

  .icon-phone {
    margin-right: 10px;
    // Ícone simulado com a cor primária
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: $primary;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M6.62 10.79l2.83 2.83-2.83 2.83 2.83 2.83L14.47 14.47l2.83 2.83 2.83-2.83-2.83-2.83 2.83-2.83-2.83-2.83-2.83 2.83L9.45 6.62l-2.83 2.83 2.83 2.83L6.62 10.79z"/></svg>') no-repeat 50% 50%;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M6.62 10.79l2.83 2.83-2.83 2.83 2.83 2.83L14.47 14.47l2.83 2.83 2.83-2.83-2.83-2.83 2.83-2.83-2.83-2.83-2.83 2.83L9.45 6.62l-2.83 2.83 2.83 2.83L6.62 10.79z"/></svg>') no-repeat 50% 50%;
  }
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

/* --- Estilos do Formulário --- */
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
      border-radius: $radius / 2;
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
    border-radius: $radius / 2;
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

/* --- Estilos da Lista --- */
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
  border-radius: $radius / 2;
  background-color: $card-bg;
}

.phone-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .phone-item {
    background-color: $card-bg;
    border: 1px solid $border;
    border-left: 5px solid $primary; /* Destaque com a cor primária */
    border-radius: $radius / 2;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .phone-number {
      color: $text-dark;
      font-weight: 500;
    }

    .btn-remove {
      background-color: $secondary-action;
      color: $text-light;
      border: none;
      padding: 6px 10px;
      border-radius: $radius / 2;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background-color 0.2s ease;

      .icon-trash {
        margin-right: 5px;
        // Ícone simulado com a cor branca
        display: inline-block;
        width: 12px;
        height: 12px;
        background-color: $text-light;
        mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-8h4v8h6V8h3L12 3 1 8h3v12h6z"/></svg>') no-repeat 50% 50%;
        -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-8h4v8h6V8h3L12 3 1 8h3v12h6z"/></svg>') no-repeat 50% 50%;
      }

      &:hover {
        background-color: $secondary-action-dark;
      }
    }
  }
}


/* 📱 Responsivo: Volta para layout de coluna em telas pequenas */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .list-section {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
    .card-modern {
        padding: 20px;
    }
    .title-modern {
        font-size: 1.5rem;
    }

    .phone-item {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 8px;

        .btn-remove {
            align-self: flex-end;
        }
    }
}
</style>