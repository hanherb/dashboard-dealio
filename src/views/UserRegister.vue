<template>
  <div class="main-content-container container-fluid h-100 px-4">
    <d-row no-gutters class="h-100">
      <d-col lg="3" md="5" class="auth-form mx-auto my-auto">
        <d-card>
          <d-card-body>
            <!-- Logo -->
            <img class="auth-form__logo d-table mx-auto mb-3" src="@/assets/images/shards-dashboards-logo.svg" alt="Shards Dashboards - Register Template">

            <!-- Title -->
            <h5 class="auth-form__title text-center mb-4">Create New Account</h5>

            <!-- Form Fields -->
            <div class="form-group">
              <label for="username">Phone Number</label>
              <input class="form-control" type="text" v-model="input.phone_number" v-on:keyup.enter="register" placeholder="Enter Phone Number" disabled/>
            </div>
            <div class="form-group">
              <label for="username">Full Name</label>
              <input class="form-control" type="text" v-model="input.name" v-on:keyup.enter="register" placeholder="Enter Full Name"/>
            </div>
            <div class="form-group">
              <label for="username">Email</label>
              <input class="form-control" type="text" v-model="input.email" v-on:keyup.enter="register" placeholder="Enter Email"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input class="form-control" type="password" v-model="input.password" v-on:keyup.enter="register" placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="password">Confirm Password</label>
              <input class="form-control" type="password" v-model="input.confirm_password" v-on:keyup.enter="register" placeholder="Password" />
            </div>
            <d-button pill class="btn-accent d-table mx-auto" v-on:click="register">Create Account</d-button>

          </d-card-body>
          <d-card-footer class="border-top">
            <!-- Social Icons -->
            <ul class="auth-form__social-icons d-table mx-auto">
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
            </ul>
          </d-card-footer>
        </d-card>

        <!-- Meta -->
        <div class="auth-form__meta d-flex mt-4">
          <d-link tag="a" to="forgot-password">Forgot your password?</d-link>
          <d-link tag="a" to="register" class="ml-auto">Sign In?</d-link>
        </div>
      </d-col>
    </d-row>
  </div>
</template>

<script>
import address from '@/address';
export default {
  name: 'register',
  props: {
    /**
       * The component's title.
       */
    title: {
      type: String,
      default: 'Application',
    },
  },
  data(){
      return{
        input:{
          phone_number: "",
          password: "",
          confirm_password: "",
          name: "",
          email: ""
        },
      }
  },
  created: function() {
    this.fetchOnePhoneRegis();
    //if google, fetch from user_google
  },
  methods: {
    fetchOnePhoneRegis() {
      var id = this.$route.params.id;
      this.axios.get(address + ":3000/get-one-phone-regis", {params: {id: id}}).then((response) => {
        this.input.phone_number = response.data[0].phone_number;
      });
    },
    register() {
      if(this.input.phone_number != "" && this.input.password != "" && this.input.confirm_password != "" && this.input.email != "" && this.input.name != "") {
        if(this.input.password == this.input.confirm_password) {
          let postObj = {
            phone_number: this.input.phone_number,
            name: this.input.name,
            email: this.input.email,
            password: this.input.password
          };
          this.axios.post(address + ':3000/register-user', postObj)
          .then((response) => {
            if(response.status == 200) {
              this.$router.push('/login');
            }
          });
        }
        else {
          alert("Password didn't match");
        }
      }
      else {
        alert("Field cannot be empty");
      }
    }
  }
}
</script>
