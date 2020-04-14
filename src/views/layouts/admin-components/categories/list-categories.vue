<template>
  <div>
    <div class="col-md-12">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Add category</h4>
            <b-form class="forms-sample" id="formItem">
              <div class="row">
                <div class="col-md-8">
                  <b-form-group label="Name" label-for="input-name">
                    <b-form-input type="text"
                                  id="input-name"
                                  placeholder="Name"
                                  v-model="form.name">
                    </b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-4">
                  <b-form-group label="Short name" label-for="input-alias">
                    <b-form-input type="text"
                                  id="input-alias"
                                  placeholder="Short name"
                                  v-model="form.alias">
                    </b-form-input>
                  </b-form-group>
                </div>
              </div>
              <b-form-group label="Description" label-for="input-description">
                <b-form-textarea type="text"
                                 id="input-description"
                                 placeholder="Description"
                                 :rows="1" :max-rows="3"
                                 v-model="form.description">
                </b-form-textarea>
              </b-form-group>
              <b-form-group label="Keywords" label-for="input-keywords">
                <b-form-input type="text"
                              id="input-keywords"
                              placeholder="Keywords"
                              v-model="form.keywords">
                </b-form-input>
              </b-form-group>
              <div class="row mt-2 mb-3">
                <div class="col-md-12">
                  <select name="categories" id="category_select" class="custom-select custom-select-sm" v-model="form.parent_id">
                    <option :value="null" selected>Parent</option>
                    <option v-for="category in CATEGORIES" :value="category.id" :key="category.id"> {{category.name}}</option>
                  </select>
                </div>
              </div>
              <b-form-group label="Upload file" label-for="input-file">
                <b-form-file id="input-file"
                             v-model="form.image"
                             :state="Boolean(form.image)"
                             placeholder="Choose a file...">
                </b-form-file>
              </b-form-group>
              <b-button variant="success" class="mr-2" @click="addCategory">Submit</b-button>
              <b-button variant="light">Cancel</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <b-form-group label="Categories"  label-for="input10">
        <div class="col-md-12 mt-2 mb-2 border category">
          <div v-b-toggle="'categories'" class="pl-2 category">
            <span>All</span>
          </div>
          <b-collapse id="categories">
            <ul class="nav flex-column sub-menu">
              <li v-for="(category, index) in CATEGORIES" :key="category.id" class="nav-item">
                <div>
                  <div v-b-toggle="`categories${category.id}`">
                    <div class="row">
                      <div class="col-md-1">
                      </div>
                      <div class="col-md-3">
                        <span>{{category.name}}</span>
                      </div>
                      <div class="col-md-2">
                        <router-link  :to="`/admin/categories/detail/${category.id}`">
                          <font-awesome-icon icon="eye" class = "blue pointer"/>
                        </router-link>
                        /
                        <a @click = "deleteCategory(category.id, CATEGORIES, index)">
                          <font-awesome-icon icon="trash-alt" class = "red pointer"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <b-collapse :id="`categories${category.id}`">
                    <ul class="nav flex-column sub-menu">
                      <div>
                        <li v-for="(subcategory, index) in category.categories" :key="subcategory.id" class="nav-item">
                          <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-2">
                              <span>{{subcategory.name}}</span>
                            </div>
                            <div class="col-md-2">
                              <router-link  :to="`/admin/categories/detail/${subcategory.id}`">
                                <font-awesome-icon icon="eye" class = "blue pointer"/>
                              </router-link>
                              /
                              <a @click = "deleteCategory(subcategory.id, category.categories, index)">
                                <font-awesome-icon icon="trash-alt" class = "red pointer"/>
                              </a>
                            </div>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </b-collapse>
                </div>
              </li>
            </ul>
          </b-collapse>
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'list-categories',
  data () {
    return {
      form: {
        name: '',
        alias: '',
        description: '',
        keywords: '',
        parent_id: '',
        image: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES',
      'DELETE_CATEGORY',
      'ADD_CATEGORY'
    ]),
    deleteItem (source, index) {
      source.splice(index, 1)
    },
    deleteCategory (id, source, index) {
      this.DELETE_CATEGORY(id).then(() => {
        this.deleteItem(source, index)
      })
    },
    addCategory () {
      const fd = new FormData()
      fd.append('name', this.form.name)
      fd.append('alias', this.form.alias)
      fd.append('description', this.form.description)
      fd.append('keywords', this.form.keywords)
      fd.append('parent_id', this.form.parent_id)
      fd.append('image', this.form.image)
      this.ADD_CATEGORY(fd)
    }
  },
  mounted () {
    this.GET_CATEGORIES()
  }
}
</script>

<style scoped>
.category{
  margin: 3px 0;
  padding: 3px 0;
  background: white;
}
</style>
