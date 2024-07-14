import { Suspense, Fragment, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingLayout from './layouts/LandingLayout';
import MentorLayout from 'layouts/MentorLayout';
import { Dashboard } from '@mui/icons-material';
import SpaceRepetitionLayout from 'layouts/SpaceRepetitionLayout';
import BootstrapLayout from 'layouts/BootstrapLayout';

const renderRoutes = (routes = []) => {
  return routes.map((route) => {
    if (route.children) {
      let Layout = route.element ? route.element : Fragment;
      let Guard = route.guard ? route.guard : Fragment;
      route.element = (
        <Guard>
          <Layout />
        </Guard>
      );

      for (let i = 0; i < route.children.length; i++) {
        let Element = route.children[i].element;
        let Guard = route.children[i].guard
          ? route.children[i].guard
          : Fragment;

        route.children[i].element = (
          <Guard>
            <Suspense fallback={<SplashScreen />}>
              <Element />
            </Suspense>
          </Guard>
        );
      }
    } else {
      let Element = route.element;
      let Guard = route.guard ? route.guard : Fragment;

      route.element = (
        <Guard>
          <Suspense fallback={<SplashScreen />}>
            <Element />
          </Suspense>
        </Guard>
      );
    }

    return route;
  });
};

const landingPages = [
  {
    element: LandingLayout,
    children: [
      {
        path: '/',
        element: lazy(() => import('./views/landing')),
      },
      {
        path: '/resources',
        element: lazy(() => import('./views/resources')),
      },
      {
        path: '/people',
        element: lazy(() => import('./views/cards')),
      },

      {
        path: '/login',
        element: lazy(() => import('./views/auth/SignIn')),
      },
      {
        path: '/userinfo',
        element: lazy(() => import('./views/users')),
      },
      {
        path: '/signup',
        element: lazy(() => import('./views/signupFlow')),
      },
    ],
  },
];

const otherPages = [
  {
    element: MentorLayout,
    children: [
      {
        path: '/profile/:name?',
        element: lazy(() => import('./views/profiles')),
      },
    ],
  },
];

const spaceRepetitionPages = [
  {
    element: SpaceRepetitionLayout,
    children: [
      {
        path: '/leetcode',
        element: lazy(() => import('./views/leetcode/Review')),
      },
      {
        path: '/leetcode/all',
        element: lazy(() => import('./views/leetcode/AllProblems')),
      },
      {
        path: '/leetcode/review',
        element: lazy(() => import('./views/leetcode/Review')),
      },
      {
        path: '/leetcode/due',
        element: lazy(() => import('./views/leetcode/DueProblems')),
      },
    ],
  },
];

const bootstrapPages = [
  {
    element: BootstrapLayout,
    children: [
      {
        path: '/bootstrap',
        element: lazy(() => import('./views/bootstrap/form')),
      },
      {
        path: '/bootstrap/all',
        element: lazy(() => import('./views/bootstrap/allServices')), //Todo - should route to new view
      },
      {
        path: '/bootstrap/form',
        element: lazy(() => import('./views/bootstrap/form')), //Todo - should route to new view (form view)
      },
    ],
  },
];

const routes = [
  ...landingPages,
  ...otherPages,
  ...spaceRepetitionPages,
  ...bootstrapPages,
];

const router = createBrowserRouter(renderRoutes(routes));

export default router;
