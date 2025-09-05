import { ref } from "vue";
import { OwnerService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useOwnerComposable = () => {
  const toastStore = useToastStore();
  
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
    getOwner,
    createOwner
  };
};
