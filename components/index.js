

// code as antdv resource code
import { default as BEmpty } from './empty';
import { default as BButton } from './button';
import { default as BCol } from './col';
import { default as BRow } from './row';
import { default as BIcon } from './icon';
import { default as BSpin } from './spin';
import { default as BDivider } from './divider';
import { default as BTag } from './tag';
import { default as BCard } from './card';
import { default as BModal } from './modal';
import { default as BForm } from './form';
import { default as BFormModel } from './form-model';
import { default as BInput } from './input';
import { default as BSelect } from './select';
import { default as BTabs } from './tabs';
import { default as BLayout } from './layout';
import { default as BMenu } from './menu';
import { default as BTooltip } from './tooltip';
import { default as BCollapse } from './collapse';
import { default as BBreadcrumb } from './breadcrumb'
import { default as BDropdown } from './dropdown'
import { default as BCheckbox } from './checkbox'
import { default as BTable } from './table'
import { default as BPagination } from './pagination'
import { default as BRadio } from './radio'
import { default as BDatePicker } from './date-picker'
import { default as BTimePicker } from './time-picker'
import { default as BSlider } from './slider'
import { default as BSteps } from './steps'
import { default as BSwitch } from './switch'

import { default as BTitle } from './bTitle';
import { default as BGridCard } from './bGridCard';
import { default as BFooter } from './bFooter';

const components = {
    BEmpty,
    BButton,
    BRow,
    BCol,
    BIcon,
    BSpin,
    BDivider,
    BTag,
    BCard,
    BModal,
    BForm,
    BFormModel,
    BInput,
    BSelect,
    BTabs,
    BLayout,
    BMenu,
    BTooltip,
    BCollapse,
    BBreadcrumb,
    BDropdown,
    BCheckbox,
    BTable,
    BPagination,
    BRadio,
    BDatePicker,
    BTimePicker,
    BSlider,
    BSteps,
    BSwitch,

    BTitle,
    BGridCard,
    BFooter
}

const install = function (Vue) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component);
        Vue.use(component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install,
    BEmpty,
    BButton,
    BRow,
    BCol,
    BIcon,
    BSpin,
    BDivider,
    BTag,
    BCard,
    BModal,
    BForm,
    BFormModel,
    BInput,
    BSelect,
    BTabs,
    BLayout,
    BMenu,
    BTooltip,
    BCollapse,
    BBreadcrumb,
    BDropdown,
    BCheckbox,
    BTable,
    BPagination,
    BRadio,
    BDatePicker,
    BTimePicker,
    BSlider,
    BSteps,
    BSwitch,

    BTitle,
    BGridCard,
    BFooter
}

export default {
    install
}