/* eslint-disable no-nested-ternary */
/* eslint-disable quotes */
class Request {
    constructor() {
      this.statusCode = null;
      this.type = null;
      this.data = null;
      this.message = null;
    }
  
    setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = "success";
    }
  
    setError(error, statusCode = 500) {
      this.statusCode = error.errors ? 400 : statusCode;
      this.message = error.errors && error.errors[0].message
        ? error.errors[0].message
        : error.errors
          ? error.errors
          : Object.keys(error).length > 0
            ? error
            : "Tivemos um problema em nosso servidor" + error ;
      this.type = "error";
    }
  
    send(res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      if (this.type === "success") {
        return res.status(this.statusCode).json(result);
      }
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
      });
    }
  }
  
  export default Request;