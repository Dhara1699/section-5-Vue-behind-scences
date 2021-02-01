const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
     this.message = this.currentUserInput;
     //this.message.this.$ref.userText.value;
     //
    },
  },

  beforeCreate() {
    console.log('beforeCreated()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMounte()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');
setTimeout(function() {
  app.unmount();
}, 3000 );
const app2 =Vue.createApp({
  data() {
    return {
      phoneNumber: '',
      contactNumber: 'Contact Number'
    };
  },
  methods: {
   saveNumber(event) {
      this.phoneNumber = event.target.value;
    },
    enterPhoneNumber() {
      this.contactNumber = this.phoneNumber;
      //this.contactNumber.this.$refs.userText.value;
    }
  },
});

app2.mount('#app2');
// Not every two applications connect to each other in Vue.js

/* Virtual DOM : JS based DOM which exists only in memory. e.g. {el:'hz', child : 'hello'}
Vue Instance Life Cycle :
1. createApp({..})
2. beforecreate() : before the app fully initialized nothing on the screen
3. created() : general app configuration
4. beforeMount() : bring something to the screen
5. Mounted() : see something on screen
6. MountedVueInstance : reach mounted vue app out
7. DataChanged() :
   - BeforeUpdate() : reach before the update has fully processed
   - Updated() : updated processed , visable on screen 
8. InstanceUnmounted() : Remove from the screen and app has dead
   - BeforeUnmounted() :
   - Unmounted() :
/*

//...
const data = {
  message: 'Hello!'
};

const handler = {
  set(target, key, value){
    console.log(target);
    console.log(key);
    console.log(value);
  }
};

const proxy = new Proxy(data, handler);
proxy.message = 'Hello!!!!..';
*/
//.....

const data = {
  message: 'Hello!',
  longMessage: 'Hello World!'
};

const handler = {
  set(target, key, value){
    if(key === 'message') {
      target.longMessage = value + ' World! ';
    }
     target.message = value;
  }
};

const proxy = new Proxy(data, handler);
proxy.message = 'Hello!!!!..';
console.log(proxy.longMessage);
