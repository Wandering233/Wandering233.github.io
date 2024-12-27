( (getMarkmap, getOptions, root2, jsonOptions) => {
    const markmap = getMarkmap();
    window.mm = markmap.Markmap.create("svg#mindmap", (getOptions || markmap.deriveOptions)(jsonOptions), root2);
}
)( () => window.markmap, null, {
    "type": "root",
    "depth": 0,
    "content": "",
    "children": [{
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [1, 2]
        },
        "content": "数据库体系结构的三级模式和两级映像",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [2, 3]
            },
            "content": "外模式：局部逻辑结构（用户视图）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [3, 4]
            },
            "content": "模式：整体逻辑结构（概念视图）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [4, 5]
            },
            "content": "内模式：存储结构（物理视图）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [5, 6]
            },
            "content": "外模式/模式映像（逻辑独立性）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [6, 7]
            },
            "content": "模式/内模式映像（物理独立性）",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [7, 8]
        },
        "content": "数据库基本概念",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [8, 9]
            },
            "content": "数据 Data",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [9, 10]
            },
            "content": "数据库 DataBase",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [10, 11]
            },
            "content": "数据库管理系统 DataBase Management System",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [11, 12]
            },
            "content": "数据库系统 DataBaseSystem",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [12, 13]
        },
        "content": "数据库发展的三个阶段",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [13, 14]
            },
            "content": "人工管理阶段",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [14, 15]
            },
            "content": "文件系统阶段",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [15, 16]
            },
            "content": "数据库系统阶段",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [16, 17]
        },
        "content": "MySQL 数据库存储引擎",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [17, 18]
            },
            "content": "主要存储引擎：InnoDB、MyISAM、MEMORY",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [18, 19]
            },
            "content": "其他引擎：MERGE、BLACKHOLE、CSV、ARCHIVE",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [19, 20]
            },
            "content": "系统数据库：information_schema、performences_schema、mysql、sys",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [20, 21]
            },
            "content": "用户自定义数据库",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [21, 22]
        },
        "content": "MySQL 数据库文件类型",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [22, 23]
            },
            "content": "数据文件",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [23, 24]
                },
                "content": "*.frm：存储数据表的框架结构，与数据表同名和存储结构无关",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [24, 25]
                },
                "content": "ibdata1：共享表空数据间文件（InnoDB存储引擎）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [25, 26]
                },
                "content": "*.ibd：独享表数据空间文件（InnoDB存储引擎）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [26, 27]
                },
                "content": "*.MYD：存储建表对应的数据（MyISAM存储引擎）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [27, 28]
                },
                "content": "*.MYI：存放表对应的索引信息（MyISAM存储引擎）",
                "children": []
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [28, 29]
            },
            "content": "日志文件",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [29, 30]
                },
                "content": "重做日志（redo log）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [30, 31]
                },
                "content": "回滚日志（undo log）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [31, 32]
                },
                "content": "二进制日志（binlog）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [32, 33]
                },
                "content": "错误日志（errorlog）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [33, 34]
                },
                "content": "慢查询日志（slow query log）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [34, 35]
                },
                "content": "一般查询日志（general log）",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [35, 36]
                },
                "content": "中继日志（relay log）",
                "children": []
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [36, 37]
            },
            "content": "系统配置文件：my.ini [可修改存储引擎，字符集和排序规则等]",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [37, 38]
        },
        "content": "MySQL 数据类型",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [38, 39]
            },
            "content": "数字类型：TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT、FLOAT、DOUBLE、REAL、DECIMAL",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [39, 40]
            },
            "content": "字符串类型：CHAR、VARCHAR、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [40, 41]
            },
            "content": "时间日期类型：TIME、DATE、YEAR、DATATIME、TIMESTAMP",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [41, 42]
            },
            "content": "二进制类型：BIT、BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [42, 43]
            },
            "content": "其他类型：ENUM类型、SET类型",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [43, 44]
        },
        "content": "数据定义语言 DDL（Data Definition Language）",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [44, 45]
            },
            "content": "Create 创建",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [45, 46]
            },
            "content": "Alter 修改",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [46, 47]
            },
            "content": "Drop 删除",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [47, 48]
        },
        "content": "数据表和视图",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [48, 49]
            },
            "content": "数据表是由 E-R 图概念模型导出的，表中的一行就是一个实体或一个元组或一个记录",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [49, 50]
            },
            "content": "视图是一种数据库对象，是从一个表或者多个表或视图中导出的虚表",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [50, 51]
        },
        "content": "数据表和视图的区别",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [51, 52]
            },
            "content": "1. 数据表占用物理空间，视图只是逻辑概念的存在",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [52, 53]
            },
            "content": "2. 视图是查看数据表的一种方法，可以查询数据表中某些字段构成的数据",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [53, 54]
            },
            "content": "3. 数据表属于全局模式，是实表；视图属于局部模式，是虚表",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [54, 55]
            },
            "content": "4. 数据表是内容，视图是窗口",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [55, 56]
            },
            "content": "5. 数据表是内模式，视图是外模式",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [56, 57]
        },
        "content": "完整性约束",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [57, 58]
            },
            "content": "实体完整性",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [58, 59]
            },
            "content": "域完整性",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [59, 60]
            },
            "content": "参照完整性",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [60, 61]
            },
            "content": "用户自定义完整性",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [61, 62]
        },
        "content": "约束机制",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [62, 63]
            },
            "content": "主键（Primary Key）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [63, 64]
            },
            "content": "外键（Foreign Key）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [64, 65]
            },
            "content": "默认（Default）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [65, 66]
            },
            "content": "唯一性（Unique）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [66, 67]
            },
            "content": "检查（Check）",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [67, 68]
        },
        "content": "数据操纵语言 DML（Data Manipulation Language）",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [68, 69]
            },
            "content": "添加数据 INSERT",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [69, 70]
            },
            "content": "修改数据 UPDATE",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [70, 71]
            },
            "content": "删除数据 DELETE",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [71, 72]
        },
        "content": "数据查询语言 DQL（Data Query Language）",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [72, 73]
            },
            "content": "简单条件查询",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [73, 74]
            },
            "content": "聚合函数",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [74, 75]
            },
            "content": "排序查询子句",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [75, 76]
            },
            "content": "分组查询子句",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [76, 77]
            },
            "content": "连接查询",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [77, 78]
                },
                "content": "内连接查询",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [78, 79]
                },
                "content": "外连接查询",
                "children": []
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [79, 80]
            },
            "content": "子查询",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [80, 81]
        },
        "content": "数据控制语言 DCL（Data Control Language）",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [81, 82]
            },
            "content": "授权 GRANT",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [82, 83]
            },
            "content": "回收 REVOKE",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [83, 84]
            },
            "content": "并发控制机制（锁及粒度）",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [84, 85]
            },
            "content": "事务的四个特性",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [85, 86]
        },
        "content": "数据库备份与还原",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [86, 87]
            },
            "content": "mysqldump 命令",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [87, 88]
        },
        "content": "数据库设计",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [88, 89]
            },
            "content": "需求分析",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [89, 90]
            },
            "content": "关系模式的规范化理论",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [90, 91]
            },
            "content": "数据库概念结构设计",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [91, 92]
            },
            "content": "数据库逻辑结构设计",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [92, 93]
            },
            "content": "数据库物理结构设计",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [93, 94]
            },
            "content": "数据库实施及运行维护",
            "children": []
        }]
    }, {
        "type": "heading",
        "depth": 1,
        "payload": {
            "lines": [94, 95]
        },
        "content": "数据库编程",
        "children": [{
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [95, 96]
            },
            "content": "编程基础",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [96, 97]
            },
            "content": "程序流程控制",
            "children": [{
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [97, 98]
                },
                "content": "顺序结构",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [98, 99]
                },
                "content": "判断分支",
                "children": []
            }, {
                "type": "heading",
                "depth": 3,
                "payload": {
                    "lines": [99, 100]
                },
                "content": "循环",
                "children": []
            }]
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [100, 101]
            },
            "content": "函数",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [101, 102]
            },
            "content": "存储过程",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [102, 103]
            },
            "content": "触发器",
            "children": []
        }, {
            "type": "heading",
            "depth": 2,
            "payload": {
                "lines": [103, 104]
            },
            "content": "事件",
            "children": []
        }]
    }],
    "payload": {}
}, null)
