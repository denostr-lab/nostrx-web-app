import { Component, Show } from 'solid-js';
import styles from './Settings.module.scss';

import { useIntl } from '@cookbook/solid-intl';
import { settings as t } from '../../translations';
import PageCaption from '../../components/PageCaption/PageCaption';
import { Link } from '@solidjs/router';
import { useAccountContext } from '../../contexts/AccountContext';

const Menu: Component = () => {

  const intl = useIntl();
  const account = useAccountContext();

  const version = import.meta.env.PRIMAL_VERSION;

  return (
    <div>
      <PageCaption title={intl.formatMessage(t.title)} />

      <div class={styles.subpageLinks}>
        <Link href="/settings/appearance">
          {intl.formatMessage(t.appearance.title)}
          <div class={styles.chevron}></div>
        </Link>

        <Link href="/settings/feeds">
          {intl.formatMessage(t.homeFeeds.title)}
          <div class={styles.chevron}></div>
        </Link>

        <Show when={account?.hasPublicKey()}>
          <Link href="/settings/muted">
            {intl.formatMessage(t.muted.title)}
            <div class={styles.chevron}></div>
          </Link>
          <Link href="/settings/filters">
            {intl.formatMessage(t.moderation.title)}
            <div class={styles.chevron}></div>
          </Link>
          <Link href="/settings/notifications">
            {intl.formatMessage(t.notifications.title)}
            <div class={styles.chevron}></div>
          </Link>
        </Show>

        <Link href="/settings/network">
          {intl.formatMessage(t.network.title)}
          <div class={styles.chevron}></div>
        </Link>

        <Show when={account?.hasPublicKey()}>
          <Link href="/settings/zaps">
            {intl.formatMessage(t.zaps)}
            <div class={styles.chevron}></div>
          </Link>
        </Show>
      </div>

      <div class={styles.webVersion}>
        <div class={styles.title}>version</div>
        <div class={styles.value}>{version}</div>
      </div>
    </div>
  )
}

export default Menu;
