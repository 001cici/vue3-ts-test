import { getConfig } from '@/config/index'

export const useSystemStore = defineStore(
  'system',
  () => {
    // 当前可切换布局
    const currentSwitchLayout = shallowRef(null)
    // 可切换布局列表
    const switchLayoutList = shallowRef([])

    // 初始化可切换布局方法
    const initSwitchLayout = list => {
      if (list && list.length > 0) {
        switchLayoutList.value = [...list]

        if (!currentSwitchLayout.value) {
          currentSwitchLayout.value = switchLayoutList.value[0]
        } else {
          // 通过name属性找到布局对象并赋值，因为持久化数据中没有组件渲染的render函数
          currentSwitchLayout.value = switchLayoutList.value.find(
            item => item.name === currentSwitchLayout.value.name
          )
        }
      }
    }

    return {
      currentSwitchLayout,
      switchLayoutList,
      initSwitchLayout
    }
  },
  {
    persist: {
      key: `${getConfig('appCode')}-pinia-system`,
      enabled: true,
      storage: window.localStorage,
      paths: ['currentSwitchlayout.name']
    }
  }
)
