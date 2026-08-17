import MdxStringWrapper from "./mdxStringWrapper";

/**
 * @typedef FieldInfo
 * @property {string} type The type of the field. Supports MDX
 * @property {string} description The description for the field. Supports MDX
 * @property {string} [default] The default value for the field if omitted. Supports MDX
 * @property {boolean} [required] If the field is required
 * @property {boolean} [nullable] If the field is nullable
 */

/**
 * Renders a table for api fields
 * @param {object} props
 * @param {object.<string,FieldInfo>} props.fields The fields as a dictionary where the key is the field name and the value is an object with details
 * @param {string | FieldInfo} [props.paginatedData] If supplied, prefills with the fields for paginated content.
 * As a string this will be the type for `Data`. As an object it will be the full definition for `Data`.
 * fields from `fields` will be added to the beginning of the table
 * @returns {JSX} Rendered table
 */
export default function FieldTable({ fields = {}, paginatedData }) {
  let displayedFields = fields;

  if (paginatedData) {
    displayedFields = {
      ...displayedFields,
      Data:
        typeof paginatedData == "object"
          ? paginatedData
          : {
              type: paginatedData,
              description: "The returned data",
              required: true,
            },
      Limit: {
        type: "integer",
        description: "The limit used",
        required: true,
      },
      Offset: {
        type: "integer",
        description: "The offset used",
        required: true,
      },
      Total: {
        type: "integer",
        description: "The total number of data entries",
        required: true,
      },
      BeginDate: {
        type: "ISO8601 Timestamp",
        description: "Always `0001-01-01T00:00:00Z`",
        required: true,
      },
      EndDate: {
        type: "ISO8601 Timestamp",
        description: "Always `0001-01-01T00:00:00Z`",
        required: true,
      },
      Columns: {
        type: "null",
        description: "Always `null`",
        required: true,
      },
      Count: {
        type: "integer",
        description: "Always `0`",
        required: true,
      },
    };
  }

  const showDefault = Object.values(fields).some((o) =>
    o.hasOwnProperty("default"),
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          {showDefault && <th>Default</th>}
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(displayedFields).map(([fieldName, field]) => (
          <tr key={fieldName}>
            <td>
              <pre>
                {fieldName}
                {!field.required ? "?" : ""}
              </pre>
            </td>
            <td>
              <MdxStringWrapper
                content={`${field.nullable ? "?" : ""}${field.type}`}
              />
            </td>
            {showDefault && (
              <td>
                <MdxStringWrapper content={field.default} />
              </td>
            )}
            <td>
              <MdxStringWrapper content={field.description} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
