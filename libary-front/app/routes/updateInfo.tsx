import { Button, DataList, Heading, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import type { User } from "~/mockData/User";
import { getUserByUserId } from "~/Services/user";

function UpdateInfo() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const user = getUserByUserId(loginUserId);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<User>({
    id: user?.id ?? "",
    username: user?.username ?? "",
    name: user?.name ?? "",
    email: user?.email ?? "",
    password: user?.password ?? "",
    phone: user?.phone ?? "",
    joinDate: user?.joinDate ?? new Date(),
    role: user?.role ?? "reader",
  });

  return (
    <div className="flex flex-col gap-7 justify-center">
      <Heading size="9" weight="light">
        Update info
      </Heading>
      <div className="flex flex-col gap-5">
        <DataList.Root>
          <DataList.Item>
            <DataList.Label minWidth="88px">username</DataList.Label>
            <DataList.Value>{user?.username}</DataList.Value>
          </DataList.Item>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">name</DataList.Label>
            <DataList.Value>
              {isEditMode ? (
                <TextField.Root
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, name: e.target.value })
                  }
                  value={editedUser.name}
                  placeholder="Name"
                ></TextField.Root>
              ) : (
                editedUser.name
              )}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">email</DataList.Label>
            <DataList.Value>
              {isEditMode ? (
                <TextField.Root
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                  value={editedUser.email}
                  placeholder="Email"
                ></TextField.Root>
              ) : (
                editedUser.email
              )}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">phone number</DataList.Label>
            <DataList.Value>
              {isEditMode ? (
                <TextField.Root
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, phone: e.target.value })
                  }
                  value={editedUser.phone}
                  placeholder="Phone number"
                ></TextField.Root>
              ) : (
                editedUser.phone
              )}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">password</DataList.Label>
            <DataList.Value>
              {isEditMode ? (
                <TextField.Root
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, password: e.target.value })
                  }
                  value={editedUser.password}
                  placeholder="Password"
                ></TextField.Root>
              ) : (
                editedUser.password
              )}
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>{" "}
        {isEditMode && (
          <Button
            onClick={(e) => {
              setIsEditMode(!isEditMode);
            }}
          >
            Save changes
          </Button>
        )}{" "}
        <Button
          onClick={(e) => {
            setIsEditMode(!isEditMode);
            setEditedUser({
              ...editedUser,
              name: user?.name ?? "",
              email: user?.email ?? "",
              phone: user?.phone ?? "",
              password: user?.password ?? "",
            });
          }}
        >
          {isEditMode ? "Cancel" : "Change info"}
        </Button>
      </div>
    </div>
  );
}

export default UpdateInfo;
