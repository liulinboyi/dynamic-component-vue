import { defineAsyncComponent } from 'vue';
import IconLoading from './icon-loading.vue';


const Icon1 = defineAsyncComponent({loader: () => import('./icon-1.vue'), loadingComponent: IconLoading, delay: 0});
const Icon2 = defineAsyncComponent({loader: () => import('./icon-2.vue'), loadingComponent: IconLoading, delay: 0});
// (... many more icon components ...)

export {
    Icon1,
    Icon2,
    // ...
};

export default {
    Icon1,
    Icon2,
    // ...
};
