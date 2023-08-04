import { Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

const Container = styled.div`
    border-radius: 10px;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 90px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)}
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`   ;

const TextContent = styled.div``;

const Icons = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
`   ;

function bgcolorChange() {
    return props.isDragging
        ? 'lightgreen'
        : props.isDraggable
        ? props.isBacklog
            ? '#F2D7D5'
            : '#DCDCDC'
        : props.isBacklog
        ? '#F2D7D5'
        : '#fffaaa';
}

export default function Task({task, index}) {
    return <Draggable draggableId={'${task.id}'} key={task.id} index={index}>
            {(provided, snapshot) => {
                <Container>
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    draggableProps={provided.draggableProps}
                    dragHandleProps={provided.dragHandleProps}
                </Container>
            }}

        <div>
            <TextContent>{task.title}</TextContent>
        </div>
        {provided.placeholder}
    </Draggable>
}