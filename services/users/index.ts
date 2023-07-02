import { User } from "@/components/molecules/TableSearchAndActions";
import { capitalizeFirstLetter } from "@/utils/helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchUsersAsync = createAsyncThunk(
  "fetch/users",
  async (params: FetchUsersI) => {
    const response = await fetch(
      `https://dummyjson.com/users?limit=${params.limit}&skip=${params.skip}&select=id,firstName,lastName,maidenName,email,phone,image,company,domain`
    );
    const users = await response.json();
    return users;
  }
);

export const fetchUsersSearch = createAsyncThunk(
  "fetch/filteredUsers",
  async (params: FetchUsersI) => {
    const response = await fetch(
      `https://dummyjson.com/users/filter?key=firstName&value=${capitalizeFirstLetter(
        params.search
      )}&limit=${params.limit}&skip=${params.skip}&select=id,firstName,lastName,maidenName,email,phone,image,company,domain`
    );
    const users = await response.json();
    return users;
  }
);

export const deleteUser = createAsyncThunk(
  "fetch/deleteUser",
  async (userId: DeleteUsersI) => {
    const response = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: "DELETE",
    });
    const userDeleteResult = await response.json();
    return userDeleteResult;
  }
);

export const createNewUser = createAsyncThunk(
  "fetch/createNewUser",
  async (user: User) => {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const newUserResponse = await response.json();
    return newUserResponse;
  }
);

export const updateUser = createAsyncThunk(
  "fetch/updateUser",
  async (user: User) => {
    const response = await fetch(`https://dummyjson.com/users/${user?.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const newUserResponse = await response.json();
    return newUserResponse;
  }
);
