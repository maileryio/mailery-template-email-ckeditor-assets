<template>
  <div>
    <input type="hidden" :name="inputName" :value="editorData"/>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" tag-name="textarea"></ckeditor>
  </div>
</template>

<script>
  import CKEditor from 'ckeditor4-vue';

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
        editorData: this.inputValue,
        editorConfig: {
          fullPage: true,
          allowedContent: true,
          filebrowserUploadUrl: 'includes/create/upload.php',
          height: '570px'
        }
      };
    }
  }
</script>
