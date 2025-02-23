import {
  IResourceComponentsProps,
  useMany,
  useTranslate,
} from "@refinedev/core";
import {
  List,
  TextField,
  useTable,
  EditButton,
  ShowButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

import { IPost, ICategory } from "../../interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable<IPost>();

  const categoryIds =
    tableProps?.dataSource?.map((item) => item.category.id) ?? [];
  const { data, isLoading } = useMany<ICategory>({
    resource: "categories",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex="title"
          title={translate("posts.fields.title")}
        />
        <Table.Column
          dataIndex={["category", "id"]}
          title={translate("posts.fields.category")}
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={data?.data.find((item) => item.id === value)?.title}
              />
            );
          }}
        />
        <Table.Column<IPost>
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
