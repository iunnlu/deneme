import React, { useState } from 'react';
import { Card, Button, ButtonGroup, ToggleButton, ButtonToolbar } from 'react-bootstrap';
import '../../styles/popularTagsStyle.scss';

const PopularTags = ({ tags, tagsChange, selectedTag, filterPosts }) => {
    const renderTags = () => {
        return tags.map(tag => {
            return (
                <Button value={tag} onClick={tagsChange} variant="dark" className="custom-button" type="radio">
                    {tag}
                </Button>
            )
        })
    }
    return (
        <Card bg="secondary" text="white" style={{ fontSize: "30px", marginTop: "20px" }}>
            <Card.Header>Tags</Card.Header>
            <Card.Body style={{ marginBottom: "10px" }}>
                {renderTags()}
            </Card.Body>
            {selectedTag === ""
                ? <React.Fragment></React.Fragment>
                : <Button style={{backgroundColor: "#568492", border:"none"}} onClick={filterPosts}>Remove Filter</Button>
            }
        </Card>
    )
}

export default PopularTags;