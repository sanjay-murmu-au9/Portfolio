import { styled } from "styled-components";
import { VectorMap } from "@south-paw/react-vector-maps";
import map from "../../../helpers/jsons/india.svg.json";
import { ContrastColor } from "../../../styles/variables";

type Props = {};

const Map = styled.div`
  margin: 1rem auto;
  height: 96vh;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #2c065d;
      /* fill: #d6d6d6; */
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168, 43, 43, 0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168, 43, 43, 0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked="true"] {
        fill: rgba(56, 43, 168, 1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: rgba(56, 43, 168, 0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="in-rj"] {
        fill: ${ContrastColor};
        /* fill: rgba(56, 43, 168, 0.6); */
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: 96vw;
  }
`;

const IndianMap = (props: Props) => {
  return (
    <Map>
      <VectorMap {...map} />
    </Map>
  );
};

export { IndianMap };
