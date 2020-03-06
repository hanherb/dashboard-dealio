<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Header - Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Campaign</span>
        <h3 class="page-title">Loyalty</h3>
      </d-col>
      <d-col col sm="8" class="text-center text-sm-right mb-4 mb-sm-0">
        <d-link to="/add-loyalty">
          <d-button class="btn-blue" v-d-tooltip.hover="'Edit'">
            Add Loyalty
          </d-button>
        </d-link>
      </d-col>
    </d-row>

    <!-- The data -->
    <div>
      <vue-good-table
        style="font-weight: 100"
        :columns="columns"
        :rows="rows"
        :search-options="{
          enabled: true
      }">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <d-link :to="'/edit-loyalty/' + props.row.id">
            <d-button class="btn-white" v-d-tooltip.hover="'Edit'">
              <i class="material-icons">&#xE254;</i>
            </d-button>
          </d-link>
        </span>
      </template>
      </vue-good-table>
    </div>

  </d-container>
</template>

<script>
import address from '@/address';
import headers from '@/headers';
export default {
  data() {
    return {
      columns: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Audience',
          field: 'audience',
        },
        {
          label: 'Start Date',
          field: 'start_date',
        },
        {
          label: 'End Date',
          field: 'end_date',
        },
        {
          label: 'Action',
          field: 'action',
          tdClass: 'text-center'
        },
      ],
      rows: [],
    };
  },

  created: function()
  {
    this.fetchLoyalty();
  },

  methods: {
    fetchLoyalty() {
      this.axios.get(address + ":3000/get-loyalty", headers).then((response) => {
        this.rows = response.data;
      });
    }
  },
};
</script>
