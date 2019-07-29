<style lang="scss">
  .project {
    &__header {
      position: relative;
      width: 100%;
      padding: 60px 0;
      overflow: hidden;
      background-image: linear-gradient( 135deg, rgb(130,130,130) 0%,rgb(103,103,103) 75% );

      &__main {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        &__image {
          overflow: hidden;
          width: 460px;
          height: 260px;
          box-shadow: 0 45px 100px rgba(0, 0, 0, 0.4);

          img {
            border-radius: 2px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &__name {
          color: #fff;
          text-shadow: 0 0 6px rgba(0, 0, 0, .5);
          cursor: default;
          font-size: 1.5rem;
          padding: 0 20px;
          letter-spacing: 2px;
        }

        &__description {
          display: block;
          color: #ffffff;
          padding: 10px;
          font-size: 1rem;
          line-height: 1.5;
          letter-spacing: 2px;
          text-shadow: 0 0 4px rgba(0, 0, 0, .5);
          border-top: 1px solid rgba(255, 255, 255, .2);
          border-bottom: 1px solid rgba(255, 255, 255, .2);
        }

      }

    }

    &__detail {
      display: flex;
      flex-flow: row wrap;

      &__item {
        flex: 0 0 33.33%;
        border: 1px solid #eee;
        position: relative;
        font-size: .95rem;
        color: #666;
        height: 200px;
        margin: 0;
        float: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        transition: all .3s ease-in-out;

        &__name {
          flex: 0 1 20px;
          font-size: 1rem;
          letter-spacing: 1px;
          line-height: 1.5;
          padding-bottom: 10px;
          margin: 20px 10px;
          border-bottom: 2px solid #efefef;
          transition: all .3s;

          i {
            margin-right: 1rem;
            font-size: 1.2rem;
          }
        }

        &__info {
          font-size: .85rem;
          padding: 10px;
          width: 100%;
          text-align: center;
          overflow-x: hidden;
          overflow-y: auto;

          img {
            max-height: 100px;
          }
        }

        &:hover{
          box-shadow: 0 0 20px rgba(0, 0, 0, .1) inset;
        }
      }
    }
  }
</style>

<template>
  <div class="project">
    <div class="project__header">
      <container class="project__header__main" :max-width="900">
        <div class="project__header__main__image">
          <img :src="`/oss/${data.projectItem.image}`" cross-origin="anonymous">
        </div>
        <blocker height="30px" />
        <div class="project__header__main__name">
          {{ data.projectItem.name }}
        </div>
        <blocker height="20px" />
        <div class="project__header__main__description">
          {{ data.projectItem.description || '暂无项目介绍' }}
        </div>
      </container>
    </div>
    <blocker height="60px" />
    <container :max-width="1060">
      <nameplate title="详情" sub-title="Detail" />
      <div class="project__detail">
        <div v-if="data.projectItem.datetime_start" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="clock" /> 项目时间
          </div>
          <div class="project__detail__item__info">
            <tag>
              始 <moment from-now type="datetime" :time="data.projectItem.datetime_start" />
            </tag>
            <tag v-if="data.projectItem.datetime_end">
              终 <moment from-now type="datetime" :time="data.projectItem.datetime_end" />
            </tag>
          </div>
        </div>
        <div v-if="data.projectItem.category" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="category" /> 项目类型
          </div>
          <div class="project__detail__item__info">
            <tag>{{ data.projectItem.category.name }}</tag>
          </div>
        </div>
        <div v-if="data.projectItem.tags" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="hashtag" /> 项目标签
          </div>
          <div class="project__detail__item__info">
            <tag>{{ data.projectItem.tags }}</tag>
          </div>
        </div>
        <div v-if="data.projectItem.status" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="status" /> 项目状态
          </div>
          <div class="project__detail__item__info">
            <tag>{{ data.projectItem.status }}</tag>
            <tag v-if="data.projectItem.hours">
              耗时约{{ data.projectItem.hours }}小时
            </tag>
          </div>
        </div>
        <div v-if="data.projectItem.role" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="role" /> 我的角色
          </div>
          <div class="project__detail__item__info">
            <tag>{{ data.projectItem.role }}</tag>
          </div>
        </div>
        <div v-if="data.projectItem.client" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="user-require" /> 需求委托方
          </div>
          <div class="project__detail__item__info">
            <tag>{{ data.projectItem.client }}</tag>
          </div>
        </div>
        <div v-if="data.projectItem.coworker" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="user-helper" /> 项目协作者
          </div>
          <div class="project__detail__item__info">
            <tag>{{ data.projectItem.coworker }}</tag>
          </div>
        </div>
        <div v-if="data.projectItem.url" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="link" /> 预览地址
          </div>
          <div class="project__detail__item__info">
            <tag><a :href="data.projectItem.url" target="_blank">点击进入</a></tag>
          </div>
        </div>
        <div v-if="data.projectItem.github" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="github" /> Github仓库
          </div>
          <div class="project__detail__item__info">
            <tag><a :href="data.projectItem.github" target="_blank">点击进入</a></tag>
          </div>
        </div>
        <div v-if="data.projectItem.qrcode" class="project__detail__item">
          <div class="project__detail__item__name">
            <icon name="github" /> 预览地址
          </div>
          <div class="project__detail__item__info">
            <img v-lazy="$getOssUrl(data.projectItem.qrcode)">
          </div>
        </div>
      </div>
    </container>
    <template v-if="data.projectItem.content">
      <blocker height="60px" />
      <container :max-width="1060">
        <nameplate title="预览" sub-title="Preview" />
        <markdown :content="data.projectItem.content || ''" />
      </container>
    </template>
    <template v-if="data.projectItem.logs">
      <blocker height="60px" />
      <container :max-width="1060">
        <nameplate title="日志" sub-title="Log" />
        <markdown :content="data.projectItem.logs || ''" />
      </container>
    </template>
    <blocker height="40px" />
    <container v-if="data.projectItem.file" :max-width="1060">
      <nameplate title="文件" sub-title="file" />
      <iframe
        v-if="data.projectItem.file.indexOf('.ppt') !== -1 || data.projectItem.file.indexOf('.doc') !== -1"
        :src="`https://view.officeapps.live.com/op/view.aspx?src=${$getOssUrl(data.projectItem.file)}`"
        width="100%"
        height="600px"
      ></iframe>
    </container>
    <container v-if="data.projectItem.video" :max-width="1060">
      <nameplate title="视频" sub-title="video" />
      <iframe
        height="500"
        width="100%"
        :src="data.projectItem.video"
        allowfullscreen
      ></iframe>
    </container>
    <blocker height="60px" />
    <container :max-width="1060">
      <comment :data="data.projectItem.comments" />
    </container>
    <blocker height="60px" />
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  head() {
    return {
      title: this.$getSeoInfo('title', `${this.data.projectItem.name} - ${this.data.projectItem.category.name} - 项目`),
      meta: [
        { hid: 'index', name: 'description', content: this.$getSeoInfo('description', `${this.data.projectItem.description || ''}`) }
      ]
    }
  },
  async asyncData({ $axios, params }) {
    const { data: projectItem } = await $axios.$get(`/api/projects/${params.id}`)
    return {
      data: {
        projectItem
      }
    }
  },
  mounted() {
    this.renderGradientColor('.project__header')
  },
  methods: {
    renderGradientColor(selector) {
      this.$grade(document.querySelectorAll(selector))
    }
  }
}
</script>