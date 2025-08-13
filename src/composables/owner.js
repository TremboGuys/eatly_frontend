import { ref } from "vue";
import { OwnerService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useOwnerComposable = () => {
  const toastStore = useToastStore();
  async function getOwners() {

    try {
      const data = await OwnerService.getOwners();

      if (data.length == 0) {
        toastStore.notify("Nenhuma proprietário encontrada.", "error");
        return [];
      }

      return data;

    } catch (error) {
      toastStore.notify(
        "Erro ao buscar proprietários. Por favor, tente novamente.",
        "error"
      );
      return false;
    }
  }

  async function createOwner(owner) {
    try {
      const ownerFormData = new FormData();
      ownerFormData.append("name", owner.name);
      ownerFormData.append("file", owner.file);

      await OwnerService.createOwner(ownerFormData);
      toastStore.notify("Proprietário criado com sucesso!", "success");
    } catch(error) {
      toastStore.notify("Erro ao criar proprietário.", "error");
      return false;
    }
  }

  return {
    getOwners,
    createOwner
  };
};
