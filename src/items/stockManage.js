import http from "../http";

class stockManage {

 getAll() {

   return http.get(`/items`);

 }

 get(id) {

   return http.get(`/items/${id}`);

 }

 create(data) {

   return http.post("/items", data);

 }

 update(id, data) {

   return http.put(`/items/${id}`, data);

 }

 delete(id) {

   return http.delete(`/items/${id}`);

 }

}

export default new stockManage();

