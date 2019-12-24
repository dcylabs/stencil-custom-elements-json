import * as d from './declarations';

export function generate(docs: d.JsonDocs){
    return { tags: docs.components.map((component) => {
        return {
            name: component.tag,
            properties: component.props.map((property) => {
                return {
                    name: property.name,
                    type: property.type,
                    default: property.default,
                    defaultValue: property.default, // used by storybook
                }
            }),
            events: component.events.map((event) => {
                return {
                    name: event.event,
                    type: event.detail,
                }
            })
        }
    })};
} 
