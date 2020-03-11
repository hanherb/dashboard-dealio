<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row>
      <d-col lg="12" class="mx-auto mt-4">
        <d-card class="card-small edit-user-details mb-4">
          <d-card-body class="p-0">
            <d-form class="py-4">
              <d-form-row class="mx-4">
                <d-col lg="8">
                  <d-form-row>

                    <d-col md="6" class="form-group">
                      <label>Name</label>
                      <d-input type="text" id="name" v-model="input.name" />
                    </d-col>

                    <d-col md="6" class="form-group">
                      <label>Search Name</label>
                      <d-input type="text" v-model="input.search_name" />
                    </d-col>
                  </d-form-row>
                </d-col>
              </d-form-row>
            </d-form>
          </d-card-body>
          <!-- Save Changes -->
          <d-card-footer class="border-top">
            <d-button size="sm" @click="addMerchant" class="btn-accent ml-auto d-table mr-3">
              Submit
            </d-button>
          </d-card-footer>

        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import address from '@/address';
import headers from '@/headers';

export default {
  data() {
    return {
      input: {
        name: "",
        search_name: "",
      }
    };
  },

  created: function()
  {

  },

  methods: {
    addMerchant() {
      let postObj = {
        name: this.input.name,
        search_name: this.input.search_name
      };
      this.axios.post(address + ':3000/add-merchant', postObj, headers)
      .then((response) => {
        if(response.status == 200) {
          this.$router.push('/merchant');
        }
      });
    }
  }
};
</script>
