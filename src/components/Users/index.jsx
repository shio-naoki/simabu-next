import ListItem from "@/src/components/ListItem";
import { useUsers } from "@/src/hooks/useUsers";
import Link from "next/link";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ListItem datum={data} pathName="/users" />
    </>
  );
};
