var section = function (title, options) {
  return _.extend({}, {
    type: "section",
    title: title,
  }, options);
};

var item = function (name, options) {
  if (! options) {
    options = {
      longname: name
    };
  }

  return _.extend({}, {
    type: "item",
    name: name
  }, options);
};

var sections = [
  section("", {
    subsections: [
      section("快速上手", {
        id: "quickstart"
      }),
      section("七大原则", {
        id: "sevenprinciples"
      }),
      section("学习资源", {
        id: "learning-resources"
      }),
      section("命令行工具", {
        id: "command-line"
      }),
      section("文件结构", {
        id: "filestructure"
      }),
      section("开发移动App", {
        id: "buildingmobileapps"
      })
    ]
  }),
  section("模版", {
    id: "templates",
    subtitle: "创建响应式模版",
    items: [
      item("用HTML定义模版", {id: "defining-templates"}),
      item("Template.<em>name</em>.helpers", {longname: "Template#helpers"}),
      item("Template.<em>name</em>.events", {longname: "Template#events"}),
      item("Template.<em>name</em>.rendered", {longname: "Template#rendered"}),
      item("<em>template</em>.findAll", {longname: "Blaze.TemplateInstance#findAll"}),
      item("<em>template</em>.find", {longname: "Blaze.TemplateInstance#find"})
    ]
  }),
  section("会话变量", {
    id: "session",
    subtitle: "为UI存储临时数据",
    items: [
      item("Session.set"),
      item("Session.get")
    ]
  }),
  section("跟踪器", {
    id: "tracker",
    subtitle: "数据改变时重新执行一些东西",
    items: [
      item("Tracker.autorun")
    ]
  }),
  section("数据集", {
    id: "collections",
    subtitle: "持续性数据存储",
    items: [
      item("Mongo.Collection"),
      item("<em>collection</em>.findOne", {longname: "Mongo.Collection#findOne"}),
      item("<em>collection</em>.find", {longname: "Mongo.Collection#find"}),
      item("<em>collection</em>.insert", {longname: "Mongo.Collection#insert"}),
      item("<em>collection</em>.update", {longname: "Mongo.Collection#update"}),
      item("<em>collection</em>.remove", {longname: "Mongo.Collection#remove"}),
      item("<em>collection</em>.allow", {longname: "Mongo.Collection#allow"}),
      item("<em>collection</em>.deny", {longname: "Mongo.Collection#deny"}),
    ]
  }),
  section("账户系统", {
    id: "accounts",
    subtitle: "让用户通过密码、Facebook、Google、Github等登陆",
    items: [
      item("{{> loginButtons}}", {id: "loginButtons"}),
      item("Meteor.user"),
      item("Meteor.userId"),
      item("Meteor.users"),
      item("{{currentUser}}", {longname: "currentUser"})
    ]
  }),
  section("方法", {
    id: "methods",
    subtitle: "从客户端调用服务器端函数",
    items: [
      item("Meteor.methods"),
      item("Meteor.call"),
      item("Meteor.Error")
    ]
  }),
  section("发布／订阅", {
    id: "pubsub",
    subtitle: "将一部分数据发给客户端",
    items: [
      item("Meteor.publish"),
      item("Meteor.subscribe")
    ]
  }),
  section("环境", {
    id: "environment",
    subtitle: "在何时何地运行你的代码",
    items: [
      item("Meteor.isClient"),
      item("Meteor.isServer"),
      item("Meteor.startup")
    ]
  }),
  section("包", {
    id: "packages",
    subtitle: "从上千个社区贡献的包中挑选",
    items: [
      item("搜索包", {id: "searchingforpackages"}),
      item("accounts-ui", {id: "accountsui"}),
      item("coffeescript"),
      item("email"),
      item("jade"),
      item("jquery"),
      item("http"),
      item("less"),
      item("markdown"),
      item("underscore"),
      item("spiderable")
    ]
  })
];

var linkPrefix = "#/basic/";
var linkFromIdLongname = function (id, longname) {
  if (id) {
    return linkPrefix + id;
  } else if (longname) {
    return linkPrefix + longname.replace(/[#.]/g, "-");
  }
};
Template.basicTableOfContents.helpers({
  sections: sections,
  linkForItem: function () {
    return linkFromIdLongname(this.id, this.longname);
  },
  maybeCurrent: function () {
    return Session.get('urlHash') === linkFromIdLongname(this.id, this.longname)
      ? 'current' : '';
  }
});
