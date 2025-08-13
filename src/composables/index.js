import { useCategoryComposable } from "./category";
import { useOwnerComposable } from "./owner";
import { useClientComposable } from "./auth/client";
import { useRestaurantComposable } from "./restaurant";

useCategoryComposable();
export {
    useCategoryComposable,
    useOwnerComposable,
    useClientComposable,
    useRestaurantComposable,
};