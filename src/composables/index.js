import { useCategoryComposable } from "./category";
import { useOwnerComposable } from "./owner";
import { useRestaurantComposable } from "./restaurant"; 
import { useClientComposable } from "./auth/client";
import { useRestaurantComposable } from "./restaurant";
import { useOwnerComposable } from "./owner";

useCategoryComposable();
export {
    useCategoryComposable,
    useOwnerComposable,
    useRestaurantComposable,
    useClientComposable
};