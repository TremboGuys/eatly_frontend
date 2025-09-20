import { useRegisterClientComposable } from "@/composables";

const useRegisterClient = useRegisterClientComposable();

function verifyPassword() {
  useRegisterClient.formState.password = true
}

function verifyEmail(email) {
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  useRegisterClient.formState.email = pattern.test(email);
}

function verifyCellphoneNumber(number_e164 = '') {
    number_e164.replace(/[^0-9+]/g, "");
    return number_e164;
}

function verifyDocument(number_document = '') {
    number_document.replace(/\D/g, "");
    return number_document;
}

export {
    verifyPassword,
    verifyEmail,
    verifyCellphoneNumber,
    verifyDocument
}