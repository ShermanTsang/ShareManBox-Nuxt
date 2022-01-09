export default {
  async getConfigurationList ({ commit }) {
    const { data } = await this.$axios.$get('/api/configurations')
    commit('SET_CONFIGURATION_LIST', data)
  },
  async getFileAssetList ({ commit }) {
    const { data } = await this.$axios.$get('/api/fileAssets')
    commit('SET_FILE_ASSET_LIST', data)
  },
  async getImageAssetList ({ commit }) {
    const { data } = await this.$axios.$get('/api/imageAssets')
    commit('SET_IMAGE_ASSET_LIST', data)
  },
  async getModuleList ({ commit }) {
    const { data } = await this.$axios.$get('/api/modules')
    commit('SET_MODULE_LIST', data)
  },
  async getPageList ({ commit }) {
    const { data } = await this.$axios.$get('/api/pages')
    commit('SET_PAGE_LIST', data)
  },
  async getCategoryList ({ commit }) {
    const { data } = await this.$axios.$get('/api/categories')
    commit('SET_CATEGORY_LIST', data)
  },
  async getInitData ({ commit }) {
    const [configurations, fileAssets, imageAssets, modules, pages] =
      await Promise.all([
        this.$axios.$get('/api/configurations').catch(err => err),
        this.$axios.$get('/api/fileAssets').catch(err => err),
        this.$axios.$get('/api/imageAssets').catch(err => err),
        this.$axios.$get('/api/modules').catch(err => err),
        this.$axios.$get('/api/pages').catch(err => err)
        // this.$axios.$get('/api/common/statistics/module').catch(err => err)
      ])
    commit('SET_CONFIGURATION_LIST', configurations.data)
    commit('SET_FILE_ASSET_LIST', fileAssets.data)
    commit('SET_IMAGE_ASSET_LIST', imageAssets.data)
    commit('SET_MODULE_LIST', modules.data)
    commit('SET_PAGE_LIST', pages.data)
    // commit('SET_STATISTICS_MODULE', statisticsModule.data)
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getInitData')
    // await dispatch('getConfigurationList')
    // await dispatch('getFileAssetList')
    // await dispatch('getImageAssetList')
    // await dispatch('getModuleList')
    // await dispatch('getPageList')
    // await dispatch('getCategoryList')
  }
}
