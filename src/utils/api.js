import {wxRequest} from './wxRequest';

//线上环境
const apiMall = 'https://www.baidu.com/app';
const apiMall_A = 'https://www.baidu.com/app1';
const apiMall_B = 'https://www.baidu.com/app2';
const apiMall_C = 'https://www.baidu.com/app3';
/**
 * 小程序接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 **/
const liteLogin = (params,callback) => wxRequest(params, apiMall + 'liteLogin.do', callback);

/*
dateType参数
今日：day
昨日：yesterDay
本周：weeks
上周：lastWeeks
近七天：nearly7Days
本月：month
上月：lastMonth
本年：year
近半年：sixMonths
自定义：custom, startDate 开始时间   endDate 结束时间  （2018-05-05）
 */
const getShopAnalysis = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getOrderAnalysis = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getStockAnalysis = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getAllStorage = (callback) => wxRequest({}, apiMall_A + 'ajax/json', callback);

//year lastYear
const getRateAnalysis = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

//总销量：salesNumber 订单数：orderCount 平均动销率：pinRatio 商品销量top：salesTop 商品动销率：goodsPinRatio
const getSalesAnalysis = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getLiteApproachList = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback, true);

const getLiteReceiptReportById = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const updateReceiptReport = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const getLiteApproachDetail = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const updateApprovalOpinion = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const getLiteIndex = (callback) => wxRequest({}, apiMall_A + 'ajax/json', callback, true);

const getOrderReport = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback, true);

const getSupplierLite = (callback) => wxRequest({}, apiMall_B + 'ajax/json', callback);

const getTaskDetailList = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const getStoreType = (callback) => wxRequest({}, apiMall_A + 'ajax/json', callback);

const doorShopList = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const doorShopDetail = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const doorShopOrderRatio = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getStaffOfYWY = (callback) => wxRequest({}, apiMall_B + 'ajax/json', callback);

const getTaskListWithDetail = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const getOrderList = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getOrderInfo = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const findStockInList = (params,callback) => wxRequest(params, apiMall_C + 'ajax/json', callback);

const getStockInDetail = (params,callback) => wxRequest(params, apiMall_C + 'ajax/json', callback);

const getSupplierApproachList = (params,callback) => wxRequest(params, apiMall_B + 'ajax/json', callback);

const findStockInfoList = (params,callback) => wxRequest(params, apiMall_C + 'ajax/json', callback);

const findStockWarringList = (params,callback) => wxRequest(params, apiMall_C + 'ajax/json', callback);

const getOutStockList = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

const getOutStockDetail = (params,callback) => wxRequest(params, apiMall_A + 'ajax/json', callback);

module.exports = {
  liteLogin,//登录
  getShopAnalysis,//客户分析
  getOrderAnalysis,//订单分析
  getStockAnalysis,//仓库分析
  getAllStorage,//获取所以仓库名称
  getRateAnalysis,//周转率趋势分析
  getSalesAnalysis,//周转率趋势分析
  getLiteApproachList,//审批管理
  getLiteReceiptReportById,//审核详情收款上报
  updateReceiptReport,//审核详情收款上报
  getLiteApproachDetail,//退换货的详情数据
  updateApprovalOpinion,//退换货的审批接口
  getLiteIndex,//首页
  getOrderReport,//首页订单数据
  getSupplierLite,//我的页面个人信息
  getTaskDetailList,//任务详情接口
  getStoreType,//获取客户类型
  doorShopList,//门店通列表接口
  doorShopDetail,//门店通详情接口
  doorShopOrderRatio,//门店通详情里的客户下单趋势接口
  getStaffOfYWY,//获取业务员
  getTaskListWithDetail,//任务列表
  getOrderList,//销售订单列表
  getOrderInfo,//销售订单详情
  findStockInList,//入库管理
  getStockInDetail,//入库管理详情
  getOutStockList,//出库管理
  getSupplierApproachList,//退换货记录
  findStockInfoList,//库存查询接口列表
  findStockWarringList,//库存预警查询接口
  getOutStockDetail//获取出库详情
}
