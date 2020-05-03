<template>
  <div class="breadcrums">
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: [
    'items'
  ]
}
</script>

<style>
  .breadcrums{
    margin-top: 1em;
  }
  .v-breadcrumbs__item{
    color:#000;
  }
  .v-breadcrumbs__item:hover{
    text-decoration: none;
    cursor: pointer;
  }
  .v-breadcrumbs{
    padding: 0;
  }
</style>
