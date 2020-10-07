const {DB_TABLE_NAME} = require('../constant');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const User = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            city:{
                type: Sequelize.STRING,
                allowNull: false
            },
            gender_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gender',
                    key: 'id'
                }
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            role_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                references: {
                    model: 'role',
                    key: 'id'
                }
            },
            status_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                references: {
                    model: 'userStatus',
                    key: 'id'
                }
            }
        };
        const UserStatus = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
        };

        const Role = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            role: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        };
        const Product = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                references: {
                    model: 'type',
                    key: 'id'
                }
            },
            gender_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gender',
                    key: 'id'
                }
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            status_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                references: {
                    model: 'productStatus',
                    key: 'id'
                }
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        };
        const ProductStatus = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
        };
        const Type = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
        };
        const OAuthToken = {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                references: {
                    model: 'user',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            accessToken: {
                type: Sequelize.STRING,
                allowNull: false
            },
            refreshToken: {
                type: Sequelize.STRING,
                allowNull: false
            }
        };
        const Purchase = {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                references: {
                    model: 'user',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            product_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                references: {
                    model: 'product',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            status_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                references: {
                    model: 'purchasestatus',
                    key: 'id'
                }
            },

        };
        const PurchaseStatus = {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true
            }
        };
        const Photo = {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                references: {
                    model: 'product',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: false
            },
        };
        const Gender = {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        };


        await queryInterface.createTable(DB_TABLE_NAME.USER_STATUS, UserStatus);
        await queryInterface.createTable(DB_TABLE_NAME.ROLE, Role);
        await queryInterface.createTable(DB_TABLE_NAME.GENDER, Gender);
        await queryInterface.createTable(DB_TABLE_NAME.USER, User);
        await queryInterface.createTable(DB_TABLE_NAME.TYPE, Type);
        await queryInterface.createTable(DB_TABLE_NAME.PRODUCT_STATUS, ProductStatus);
        await queryInterface.createTable(DB_TABLE_NAME.OAUTH_TOKEN, OAuthToken);
        await queryInterface.createTable(DB_TABLE_NAME.PURCHASE_STATUS, PurchaseStatus);
        await queryInterface.createTable(DB_TABLE_NAME.PRODUCT, Product);
        await queryInterface.createTable(DB_TABLE_NAME.PURCHASE, Purchase);
        await queryInterface.createTable(DB_TABLE_NAME.PHOTO, Photo);


    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('user');
    }
};
