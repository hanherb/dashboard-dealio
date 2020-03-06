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
                      <label>Vendor</label>
                      <d-form-select v-model="input.vendor" :options="vendorOptions" />
                    </d-col>

                    <d-col md="6" class="form-group">
                      <label>Start Date</label>
                      <d-datepicker
                        v-model="input.start_date"
                        @opened="handleOpened"
                        @closed="handleClosed"
                        format="yyyy-MM-dd"
                        typeable />
                    </d-col>

                    <d-col md="6" class="form-group">
                      <label>End Date</label>
                      <d-datepicker
                        v-model="input.end_date"
                        @opened="handleOpened"
                        @closed="handleClosed"
                        format="yyyy-MM-dd"
                        typeable />
                    </d-col>

                    <d-col md="6" class="form-group">
                      <label>Audience</label>
                      <d-form-select v-model="input.audience" :options="audienceOptions" />
                    </d-col>

                    <d-col md="8" class="form-group">
                      <label>Description</label>
                      <textarea v-model="input.description"
                        rows="6" wrap="soft" class="form-control form-control-lg">
                      </textarea>
                    </d-col>
                  </d-form-row>
                </d-col>

                <!-- User Profile Picture -->
                <d-col lg="4">
                  <label for="userProfilePicture" class="text-center w-100 mb-4">Image</label>
                  <div class="edit-user-details__avatar m-auto">
                    <img src="@/assets/images/uploads/undefined.png" alt="User Avatar">
                    <label class="edit-user-details__avatar__change">
                                <i class="material-icons mr-1">&#xE439;</i>
                                <d-input type="file" id="userProfilePicture" class="d-none" />
                              </label>
                  </div>
                  <d-button size="sm" class="btn-white d-table mx-auto mt-4"><i class="material-icons">&#xE2C3;</i> Upload Image</d-button>
                </d-col>
              </d-form-row>
            </d-form>
          </d-card-body>
          <!-- Save Changes -->
          <d-card-footer class="border-top">
            <d-button size="sm" @click="addEarn" class="btn-accent ml-auto d-table mr-3">
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
      vendorOptions: [
        "A & W",
        "Ace Hardware",
        "Alfamart",
        "Alfamidi",
        "Bakmi GM",
        "Blibli",
        "Burger King",
        "CGV",
        "Cinema XXI",
        "Dunkin Donuts",
        "Hypermart"
      ],
      audienceOptions: [
        "Full Audience Group",
        "Full Audience Smoker",
        "Female Full Audience",
        "Jakarta Smoker Audience",
        "Jawa Timur Full Audience",
        "DI Yogyakarta Audience",
        "Jawa Barat Full Audience",
        "DKI Jakarta Full Audience",
        "Bali Full Audience",
      ],
      input: {
        name: "",
        vendor: "",
        start_date: "",
        end_date: "",
        audience: "",
        description: "",
        image: ""
      },
    };
  },

  created: function()
  {
    
  },

  methods: {
    addEarn() {
      let postObj = {
        name: this.input.name,
        vendor: this.input.vendor,
        start_date: this.input.start_date,
        end_date: this.input.end_date,
        audience: this.input.audience,
        description: this.input.description,
        image: this.input.image,
      };
      this.axios.post(address + ':3000/add-earn', postObj, headers)
      .then((response) => {
        console.log(response)
        if(response.status == 200) {
          this.$router.push('/earn');
        }
      });
    }
  }
};
</script>
