export default {
  index: {
    title: '管理系统'
  },
  route: {
    dashboard: '首页',
    icons: '图标',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    theme: '换肤',
    i18n: '国际化',
    profile: '个人设置',
    systemManager: '系统管理',
    sysUserManager: '用户管理',
    sysRoleManager: '角色管理',
    sysMenuManager: '菜单管理',
    sysDicManager: '常量管理',
    sysJobManager: '定时任务',
    sysApiListManager: '接口列表',
    sysAuthorityManager: '权限管理',
    sysRegionManager: '地区管理',
    sysMetadataManager: '数据字典',
    sysJobRunLogManager: '实例日志',
    sysOptLogManager: '操作日志',
    userLoginManager: '用户列表',
    appBrandManager: '应用管理',
    sysMsgManager: '消息管理',
    toolsManager: '基础组件',
    userMsgManager: '系统消息',
    chartsManager: "图表统计",
    statisticsManager: '统计管理',
    system: '权限',
    integrate: '综合',
    parent: '父菜单'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    screenfull: '全屏',
    theme: '换肤',
    size: '布局大小',
    profile: '个人设置'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码'
  },
  select: {
    defaultValue: '请选择'
  },
  table: {
    id: '序号',
    type: '类型',
    date: '时间',
    createdTime: '创建时间',
    lastModifiedTime: '更新时间',
    createdUser: '创建人员',
    lastModifiedUser: '更新操作人',
    remark: '备注',
    status: '状态',
    actions: '操作',
    search: '搜索',
    add: '添加',
    export: '导出',
    import: '导入',
    edit: '编辑',
    detail: '详情',
    setting: '设置',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    confirmSave: '保 存',
    submit: '提交',
    grant: '授权',
    batch: '批量',
    query: '查询',
    reset: '重置',
    locked: '锁定',
    unlocked: '解锁',
    bind: '绑定',
    user: '用户',
    role: '角色',
    menu: '菜单',
    authority: '权限',
    move: '移动',
    start: '启动',
    stop: '停止',
    pause: '暂停',
    release: '释放',
    logs: '日志',
    back: '返回',
    byOrder: '排序',
    success: '成功',
    fail: '失败',
    sync: '同步数据'
  },
  theme: {
    change: '换肤'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  action: {
    required: '必填',
    unique: '已经存在'
  },
  utils: {
    request: {
      opt_success: '操作成功!',
      logout_confirm_text: '你已被登出，可以取消继续留在该页面，或者重新登录!',
      logout_confirm_title: '确定登出',
      logout_confirm_btn: '重新登录',
      logout_confirm_cancel: '取消'
    },
    clipboard: {
      tips: '点击复制',
      success: '复制成功',
      error: '复制失败'
    },
    validator: {
      phoneNumber: '请输入正确的手机号',
      username: '请输入数字字母',
      password: '请输入不少于6位数密码',
    }
  },
  components: {
    langSelect: {
      message: '切换语言环境成功'
    },
    dyFilterInput: {
      placeholder: '请输入查询'
    },
    dySelect: {
      placeholder: '请选择'
    },
    sysCode: {
      placeholder: '请选择'
    }
  },
  views: {
    commons: {
      confirm: {
        text: '确认操作？',
        remove_text: '确认删除这条记录？',
        ok: '确认进行操作？',
        cancel: '已取消操作'
      },
      message: {
        single_selected: '请选择一条数据进行操作',
        multi_selected: '请至少选择一条数据进行操作'
      },
      codes: {
        yes: '是',
        no: '否'
      }
    },
    errorPage: {
      msg_blank_404: '大哥，你还没这个写页面吧！',
      msg_404: '请检查您输入的网址是否正确，请点击以下按钮返回主页',
      msg_401: '你没有权限去该页面',
      goHome: '回首页'
    },
    login: {},
    profile: {
      tabMapOptions: {
        sysUserProfile: '个人资料',
        resetPassword: '重置密码',
      },
      sysUserProfile: {
        formData: {
          username: '用户名',
          realName: '姓名',
          phoneNo: '手机号',
          email: '邮箱',
        }
      },
      resetPassword: {
        formData: {
          originalPassword: '原密码',
          currentPassword: '新密码'
        },
      }
    },
    system: {
      components: {
        authoritySelect: {
          message: '绑定权限',
          formData: {
            authorityName: "权限名称",
            shiroCode: "ShiroCode"
          },
        },
        menuMeta: {
          message: '参数',
          addItem: {
            title: '请输入参数名称',
            inputErrorMessage: '请输入1-10个数字字母或中文字符',
            dkError: '参数已存在，请勿重复添加！'
          }
        },
        menuSelect: {
          message: '绑定菜单',
        },
        roleSelect: {
          message: '绑定角色',
        }
      },
      sysApiListManager: {
        formData: {
          apiName: "名称",
          apiTag: "标签",
          apiUrl: "地址",
          shiroCode: "ShiroCode"
        }
      },
      sysAuthorityManager: {
        formData: {
          authorityName: "描述",
          module: '模块',
          domain: '业务',
          action: '动作',
          shiroCode: "ShiroCode"
        }
      },
      sysDicManager: {
        action: {
          h1: '常量类型',
          h2: '常量列表'
        },
        formData: {
          typeName: '类型名称',
          typeCode: '类型编号',
        },
        formDataDic: {
          valName: '常量名称',
          typeCode: '类型名称',
          valCode: '常量编号',
        },
      },
      sysJobManager: {
        tabMapOptions: {
          jobDetailsManager: '任务列表',
          jobTriggerManager: '触发器',
          jobInstanceManager: '实例列表',
        },
        jobDetailsManager: {
          action: {
            addInstance: '创建实例',
            triggerDySelect: '请选择触发器'
          },
          formData: {
            clazzPath: "类路径",
            description: "任务描述",
            jobName: "任务名称",
            jobParams: "任务参数",
            jobId: '任务ID',
            triggerId: '触发器',
            groupName: '组名称',
            instanceTimeRange: '执行日期',
          },
        },
        jobTriggerManager: {
          action: {},
          map: {
            MILLISECOND: '毫秒',
            SECOND: '秒',
            MINUTE: '分',
            HOUR: '时',
            DAY: '天',
            WEEK: '周',
            MONTH: '月',
            YEAR: '年',
            WEEK_2: '周一',
            WEEK_3: '周二',
            WEEK_4: '周三',
            WEEK_5: '周四',
            WEEK_6: '周五',
            WEEK_7: '周六',
            WEEK_1: '周日',
          },
          formData: {
            cron: 'Cron',
            cron_1: '参考教程：',
            cron_2: '0 0 12 * * ? -- 每天12点触发',
            cron_3: '更多',
            interval: '间隔',
            intervalUnit: '单位',
            repeatCount: '重复次数',
            repeatCount_p: "不填则不限",
            triggerName: '触发器名称',
            triggerType: '触发器类型',
            daysOfWeek: '执行日期',
            endTimeOfDay: '结束时间',
            startTimeOfDay: '开始时间',
            timeRangeOfDay: '执行范围（每天）',
          },
        },
        jobInstanceManager: {
          action: {},
          message: {
            formOpenOpt: '确认进行操作？',
            handleRemove: '释放后无法恢复，确定要释放？'
          },
          formData: {
            clazzPath: '类路径',
            groupName: '组名称',
            instanceId: '实例ID',
            instanceParams: '实例参数',
            jobId: '任务ID',
            jobName: '实例名称',
            triggerId: '触发器ID',
            triggerRule: '触发规则',
            endTime: '结束时间',
            startTime: '开始时间',
            timeRangeOfDay: '执行范围（每天）',
          },
        },
        sysJobRunLogManager: {
          formData: {
            result: '返回结果'
          }
        }
      },
      sysMenuManager: {
        message: {
          h1: '菜单目录',
          h2: '菜单详情',
          input_placeholder: '输入关键字进行过滤',
          bindAuthorities: '绑定权限',
          formOpen: '请选择父菜单',
          empty: '请选择左边菜单进行编辑'
        },
        action: {
          formOpenParams: '编辑',
          append: '追加',
          remove: '删除',
          add: '同级增加',
          addChild: '子级增加',
          child: '子菜单',
          update: '更新',
        },
        formData: {
          name: '组件名称',
          path: '路由地址',
          component: '页面组件',
          hidden: '是否隐藏',
          hiddenDesc: '(选中是则不展示在菜单栏)',
          alwaysShow: '始终显示',
          alwaysShowDesc: '(选中是则无论其子级路由的长度如何，它将始终显示根菜单)',
          meta: '目录参数',
          metaDesc: '(设置参数 title: \'目录\'，icon: \'child\', noCache: true)',
          parentId: '上级菜单',
          redirect: '重定向',
        }
      },
      sysRegionManager: {
        message: {
          handleInit: '确认初始化地区数据？'
        },
        action: {
          handleInit: '初始化数据'
        },
        formData: {
          depth: '级别',
          depthName: '级别名',
          firstLetter: '首字母',
          jianPin: '简拼',
          name: '名称',
          parentId: '父ID',
          pinYin: '全拼'
        }
      },
      sysRoleManager: {
        formData: {
          roleCode: '角色编号',
          roleName: '角色名称',
        },
      },
      sysUserManager: {
        action: {
          handleStatus_confirm: '确认操作',
          handleStatus_cancel: '已取消操作'
        },
        formData: {
          active: '是否激活',
          username: '用户名',
          pwd: '密码',
          realName: '姓名',
          phoneNo: '手机号',
          email: '邮箱',
          roleNames: '角色'
        },
      },
      sysMetadataManager: {
        action: {
          handleStatus_confirm: '确认操作',
          handleStatus_cancel: '已取消操作'
        },
        formData: {
          tableName: '表名',
          pkName: '主键',
          columnName: '字段名',
          typeName: '类型',
          notNull: '不为空',
          remarks: '描述',
          noData: '暂无'
        },
      },
      sysOptLogManager: {
        formData: {
          ipGeo: "IP位置",
          operator: "操作人",
          optIp: "IP",
          optName: "操作说明",
          requestData: "请求数据",
          requestUrl: "请求地址"
        },
      }
    },
    app: {
      appBrandManager: {
        action: {
          setting: '小程序配置',
        },
        formData: {
          appName: "名称",
          appNo: "编号",
          appDesc: "简介",
          logo: "Logo"
        },
        formDataMaConfig: {
          aesKey: "AESKEY",
          aid: "应用ID",
          appId: "小程序ID",
          appKey: "小程序Key",
          appNo: "应用编号",
          maType: "小程序类型",
          msgDataFormat: "推送数据格式",
          secret: "小程序密钥",
          token: "Token"
        },
      }
    },
    user: {
      userLoginManager: {
        action: {
          maSession: '小程序会话',
        },
        formData: {
          appNo: "应用编号",
          avatarUrl: "头像",
          city: "城市",
          country: "国家",
          gender: '性别',
          maType: "类型",
          nickName: "昵称",
          openid: "openid",
          password: "密码",
          phoneNo: "手机号",
          province: "省份",
          unionid: "联合ID",
          username: "用户名"
        }
      }
    }
  }
}
