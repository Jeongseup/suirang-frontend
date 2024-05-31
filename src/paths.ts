export const paths = {
  home: '/',
  dashboard: {
    // use
    main: '/dashboard',
    summary: '/dashboard/summary',
    community: '/dashboard/community',
    // unused
    overview: '/dashboard/overview',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
