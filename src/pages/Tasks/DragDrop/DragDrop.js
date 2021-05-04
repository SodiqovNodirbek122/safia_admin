import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import "./dragdrop.less";
import img from "@/assets/images/user.png";
import TaskModal from "../TaskModal";

const DATA = [
  {
    id: "af1",
    label: "Новые",
    items: [
      {
        id: "af2",
        label: "Новые",
        date: "Фев 24",
        users: img,
        users_count: 24,
      },
      {
        id: "af3",
        label: "Кондидаты",
        date: "Фев 23",
        users: img,
        users_count: 12,
      },
    ],
    tint: 1,
  },
  {
    id: "af4",
    label: "Приглашенные",
    items: [
      {
        id: "af5",
        label: "Приглашенные",
        date: "Фев 23",
        users: img,
        users_count: 12,
      },
      {
        id: "af6",
        label: "Кондидаты",
        date: "Фев 23",
        users: img,
        users_count: 56,
      },
    ],
    tint: 2,
  },
  {
    id: "af7",
    label: "Собеседование",
    items: [
      {
        id: "af8",
        label: "Собеседование",
        date: "Фев 23",
        users: img,
        users_count: 89,
      },
      {
        id: "af9",
        label: "Кондидаты",
        date: "Фев 23",
        users: img,
        users_count: 12,
      },
    ],
    tint: 3,
  },
  {
    id: "af10",
    label: "Собеседование",
    items: [
      {
        id: "af11",
        label: "Кондидаты",
        date: "Фев 23",
        users: img,
        users_count: 12,
      },
      {
        id: "af12",
        label: "Собеседование",
        date: "Фев 23",
        users: img,
        users_count: 98,
      },
    ],
    tint: 3,
  },
];

export default function DragDrop() {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});
  const [modal, setModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Mock an API call.
    buildAndSave(DATA);
  }, []);

  function buildAndSave(items) {
    const groups = {};
    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    }

    // Set the data.
    setItems(items);

    // Makes the groups searchable via their id.
    setGroups(groups);
  }
  return (
    <div className="dragdrop">
      <DragDropContext
        onDragEnd={(result) => {
          const { destination, draggableId, source, type } = result;

          if (!destination) {
            return;
          }

          if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
          ) {
            return;
          }

          if ("group" === type) {
            const sourceIndex = source.index;
            const targetIndex = destination.index;

            const workValue = items.slice();
            const [deletedItem] = workValue.splice(sourceIndex, 1);
            workValue.splice(targetIndex, 0, deletedItem);

            buildAndSave(workValue);

            return;
          }

          const sourceDroppableIndex = groups[source.droppableId];
          const targetDroppableIndex = groups[destination.droppableId];
          const sourceItems = items[sourceDroppableIndex].items.slice();
          const targetItems =
            source.droppableId !== destination.droppableId
              ? items[targetDroppableIndex].items.slice()
              : sourceItems;

          // Pull the item from the source.
          const [deletedItem] = sourceItems.splice(source.index, 1);
          targetItems.splice(destination.index, 0, deletedItem);

          const workValue = items.slice();
          workValue[sourceDroppableIndex] = {
            ...items[sourceDroppableIndex],
            items: sourceItems,
          };
          workValue[targetDroppableIndex] = {
            ...items[targetDroppableIndex],
            items: targetItems,
          };

          setItems(workValue);
          console.log(workValue);
        }}
      >
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                // <Draggable draggableId={item.id} key={item.id} index={index}>
                //   {(provided) => (
                //     <div
                //       {...provided.draggableProps}
                //       {...provided.dragHandleProps}
                //       ref={provided.innerRef}
                //     >
                <DroppableList key={item.id} {...item} />
                //     </div>
                //   )}
                // </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <TaskModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
  function DroppableList({ id, items, label, tint }) {
    const onFinish = () => {
      setIsModalVisible(true);
    };
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className={`holder holder--tint-${tint}`}>
              <div className="holder__title">
                <div>
                  <h2>{label}</h2>
                  <h3>{items.length}</h3>
                </div>
                <PlusOutlined />
              </div>
              <div className="holder__content">
                <ul className="list">
                  {items.map((item, index) => (
                    <li className="list__item" key={item.id}>
                      <Draggable draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            className="card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={onFinish}
                          >
                            <div>
                              <h2>{item.label}</h2>
                              <p>{item.date}</p>
                            </div>
                            <div>
                              <div className="user-img">
                                <img alt={"user"} src={item.users} />
                              </div>
                              <div>
                                <UserOutlined />
                                <span>{item.users_count}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    </li>
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
              <div className="add-task">
                <PlusOutlined />
                <span>Новая задача</span>
              </div>
            </div>
          </div>
        )}
      </Droppable>
    );
  }
}
