import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const auth = {
  name: "auth",
  state: {
    authUser: null,
    errors: null
  },
  reducers: {
    setAuthUser(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async getAuthUser(payload, rootState) {
        try {
          const response = await makeRequest(api.me);
          const { data } = response;

          dispatch.auth.setAuthUser({ authUser: data.user });
        } catch (error) {
          dispatch.auth.setAuthUser({ errors: error.response.data });
        }
      },
    };
  }
};
