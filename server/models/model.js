import sequelize from './db.js';
import { DataTypes } from 'sequelize';

const MainContent = sequelize.define('mainContent', {
    // id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    img: { type: DataTypes.STRING, allowNull: false },
    logo: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    disc: { type: DataTypes.STRING, allowNull: false },
    whyUsText: { type: DataTypes.STRING, allowNull: false },
})
const WhyUsCards = sequelize.define('whyUsCards', {
    // id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    icon: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
})
const PriceList = sequelize.define('priceList', {
    // id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    title: { type: DataTypes.STRING, allowNull: false },
    disc: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
})
const Posts = sequelize.define('posts', {
    // id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    title: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
})
const PostContent = sequelize.define('postContent', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true },
    img: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
})
const Admin = sequelize.define('admin', {
    login: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
})

Posts.hasMany(PostContent);
PostContent.belongsTo(Posts);



export { MainContent, WhyUsCards, PriceList, Posts, PostContent, Admin };