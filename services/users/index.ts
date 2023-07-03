import { User } from "@/components/molecules/TableSearchAndActions";
import { capitalizeFirstLetter } from "@/utils/helper";
import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface UserStoreState {
  userData: any[];
  deletedUsers: any[];
  addedUsers: any[];
  updatedUsers: any[];
  loading: boolean;
  error: boolean;
}

export interface FetchUsersI {
  limit: number;
  skip: number;
  search: string;
}

export interface DeleteUsersI {
  userId: number;
}

const apiBaseUrl = "https://dummyjson.com/users";

export const fetchUsersAsync = createAsyncThunk<any, FetchUsersI>(
  "fetch/users",
  async (params: FetchUsersI) => {
    try {
      const response = await fetch(
        `${apiBaseUrl}?limit=${params.limit}&skip=${params.skip}&select=id,firstName,lastName,maidenName,email,phone,image,company,domain`
      );
      const users = await response.json();
      return users;
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }
);

export const fetchUsersSearch = createAsyncThunk<any, FetchUsersI>(
  "fetch/filteredUsers",
  async (params: FetchUsersI) => {
    try {
      const response = await fetch(
        `${apiBaseUrl}/filter?key=firstName&value=${capitalizeFirstLetter(
          params.search
        )}&limit=${params.limit}&skip=${params.skip}&select=id,firstName,lastName,maidenName,email,phone,image,company,domain`
      );
      const users = await response.json();
      return users;
    } catch (error) {
      throw new Error("Error fetching filtered users");
    }
  }
);

export const deleteUser = createAsyncThunk<any, number>(
  "fetch/deleteUser",
  async (userId: number) => {
    try {
      const response = await fetch(`${apiBaseUrl}/${userId}`, {
        method: "DELETE",
      });
      const userDeleteResult = await response.json();
      return userDeleteResult;
    } catch (error) {
      throw new Error("Error deleting user");
    }
  }
);

export const createNewUser = createAsyncThunk<any, User>(
  "fetch/createNewUser",
  async (user: User) => {
    try {
      const response = await fetch(`${apiBaseUrl}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const newUserResponse = await response.json();
      return newUserResponse;
    } catch (error) {
      throw new Error("Error creating new user");
    }
  }
);

export const updateUser = createAsyncThunk<any, User>(
  "fetch/updateUser",
  async (user: User) => {
    try {
      const response = await fetch(`${apiBaseUrl}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const newUserResponse = await response.json();
      return newUserResponse;
    } catch (error) {
      throw new Error("Error updating user");
    }
  }
);
