<template>
  <div>
    <input type="hidden" :name="inputName" :value="editorData"/>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" tag-name="textarea"></ckeditor>
  </div>
</template>

<script>
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    name: 'ui-template-email-ckeditor',
    props: {
      inputName: {
        type: String,
        default: 'search'
      },
      inputValue: {
        type: String
      }
    },
    components: {
      ckeditor: CKEditor.component
    },
    data() {
      return {
        editor: ClassicEditor,
        editorData: this.inputValue,
        editorConfig: {
          // The configuration of the editor.
        }
      };
    }
  }
</script>
