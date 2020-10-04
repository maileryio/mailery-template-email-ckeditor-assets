import CKEditor from './components/CKEditor.vue';
import './styles/index.scss';

const plugin = {
  install,
  CKEditor
};

(function (plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(plugin);
  }
})(plugin);

export function install(Vue, options) {
  Vue.component(CKEditor.name, CKEditor);
}

export default plugin;
