
/**
 * util工具函数
 *
 * @export
 * @class utils
 */
export default class utils{

    /**
     * 深拷贝
     *
     * @static
     * @param {Object} data
     * @returns {Object} data
     * @memberof utils
     */
    static deepCopy(data) {
        const that = this;
       if (Object.prototype.toString.call(data) === "[object Array]"){
           return data.map(((item) => {
               if (Object.prototype.toString.call(item) === "[object Array]" || Object.prototype.toString.call(item) === "[object Object]") {
                   return that.deepCopy(item);
               }
               return item;
           }));
       } else if (Object.prototype.toString.call(data) === "[object Object]") {
           let newData = {};
           for (let i in data) {
               if (Object.prototype.toString.call(data[i]) === "[object Array]" || Object.prototype.toString.call(data[i]) === "[object Object]") {
                   newData[i] = that.deepCopy(data[i]);
               } else {
                   newData[i] = data[i];
               }
           }
           return newData;
       }
    }

    /**
     * 获取今天的日期
     *
     * @static
     * @param {String} [type="-"]
     * @returns {String} // 2018-11-11
     * @memberof utils
     */
    static getDate(type = "-") {
		const date = new Date();
		const year = date.getFullYear();
		const month = this.datePlus0(new Date().getMonth() + 1);
		const currentDate = this.datePlus0(new Date().getDate());
		return `${year}${type}${month}${type}${currentDate}`;
    }

    /**
     * 加0
     *
     * @static
     * @param {Number} x
     * @returns {String}
     * @memberof utils
     */
    static datePlus0(x) {
		if (x < 10) {
			return `0${x}`;
		} else {
			return x;
		}
	}
}