import { Component, createEffect, createSignal, For, onMount } from "solid-js";
import { hookForDev } from "../../lib/devTools";
import { MenuItem } from "../../types/primal";
import styles from  "./PrimalMenu.module.scss";
import PrimalMenuItem from "./PrimalMenuItem";


const PrimalMenu: Component<{
  id: string,
  items: MenuItem[],
  position?: 'note_footer' | 'profile',
  orientation?: 'up' | 'down',
  reverse?: boolean,
  hidden?: boolean,
}> = (props) => {

  const visibilityClass = () => {
    if (props.hidden) {
      return styles.hidden;
    }

    return '';
  };

  const positionClass = () => {
    if (props.position == 'note_footer') {
      return styles.noteFooter
    }

    if (props.position == 'profile') {
      return styles.profile
    }

    return '';
  }

  const orientationClass = () => {
    if (!props.orientation || props.orientation == 'down') {
      return styles.contextMenuOptions
    }

    return styles.contextMenuOptionsUp
  };

  return (
    <div
      id={props.id}
      class={`${orientationClass()} ${positionClass()} ${visibilityClass()}`}
    >
      <For each={props.items}>
        {item => (
          <PrimalMenuItem item={item} reverse={props.reverse} />
        )}
      </For>
    </div>
  )
}

export default hookForDev(PrimalMenu);
