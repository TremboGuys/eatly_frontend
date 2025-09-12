import { computed, reactive, ref } from "vue";
import { OwnerService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useOwnerComposable = () => {
  const toastStore = useToastStore();

  const enable = computed(() => {
    return Object.values(formState).every(value => !!value);
  });

  const formState = reactive({
    email: false,
    password: false,
    name: false,
    type_document: false,
    number_document: false,
    date_birth: false,
    street: false,
    number: false,
    district: false,
    zipcode: false,
    city: false,
    number_e164: false,
  })
  
  async function getOwner(id) {
    try {
      const data = await OwnerService.getOwner(id);

      if (data.length == 0) {
        toastStore.notify("Nenhum proprietário encontrado.", "warning");
        return [];
      }

      return data;

    } catch (error) {
      toastStore.notify(
        "Erro ao buscar o proprietário. Por favor, tente novamente.",
        "error"
      );
      return false;
    }
  }

  async function createOwner(owner) {
    try {
      const data = await OwnerService.createOwner(owner);
      toastStore.notify("Proprietário criado com sucesso!", "success");
      return data;
    } catch(error) {
      toastStore.notify("Erro ao criar proprietário.", "error");
      return false;
    }
  }

  return {
    enable,
    formState,
    getOwner,
    createOwner
  };
};
