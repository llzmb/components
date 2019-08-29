import React from 'react';
import { Wrapper } from 'react-inky';

import './header.css';

const dbLogo =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA5CAYAAACh6qw/AAAFPUlEQVR4AWJAB4D2zTFadiSKwhn+HrSebdu239i2bc88jm3btm3btsOOz2QPLtZL90l6ktvJutlr7T+NJPV1napTp6rlUqmvWCicLuZy7/6Zy0meqZVbAgswARuhkqhfv7XFfP5c78NOBs3fYANGYLUKPO8Dj2eQAvvxZhA9sudnUMIZzARIKRYHZGFbWziDneDF9JmVPiSNG0fKZpu1ZoNBRYhgh/B9z+9N/bzziDJBYOELEOwEv1RF7NaNXNclygSBBZj4pjiCb+iOGUPNlUkaPdoPIPkCxIf9ZD36aHg/8QTZb75J7nffEek6/R9ZTz5J1uOP12T7mWfI+fhjIlmuH8AoZi95yhTSlywh+6WXKKzE9u2jmUE7dyZt553JeughIttOKkDeyqJF6J0xAuQte8OV8847aQTYkApQ+YQT6gYQFtu1I+veexMOkLF24IGY7uoCEBY7dSLn/ffTCxAuH3dc/ACZIaWuAKW+fUlfuZL05cupfNBBpG69NUnDhwfvBcUi2W+8QRWEUKs+no0cScZVV/3jK64g/eSTSTvgAJJHjAj8DPbrr9cPoDx5MvnJfvllwAw2qE+cSOQ4NQFUFiwgP+F65o034gdi768vXZo4gA3Szz47EESkF0wIMwD9pS9bxt5b3Xjj5AKEtL324hux/faxAHQ++ohvw4QJyQZIoogZr/pY2KYNub/9FjlAMk3ySvPVrzF/frIBQtqee/JhfPfdkQN0f/2VvS+eLfEArfvvZ6+F5V7UAK377mPva956a/IBut98w4+Dm20WLUBNY1MqpDtULicfIIQFfdWcsl+/yACicCGPH88+PypHUBoAIunlkurQAMXu3UnddNMGK3PnNhRCOSPxh1IDUJkzh70eqWqLLOWweoJSBRAJK3c998cfYwWozJzZkLSnD+AWW7DXcz75JDaA0pAhWDOT+9NPKQW49db1BNhgsVTC+AeQKQO4ySZ8CH/3XYuVs6TevVH0SNEkMm8eD/DPP1u0Hih26EDOu++mAiDKVvwsbFnhylmzZmHiafQPP5Dz4YdkPfAAafvvT2Lbtnwb0HbbTjxAtqAg9e8ffTXm/fdR9OWXczfckGyA7vff8ynG4sWRA4TMm24KXxNMGkDzjjv4lcGhh8YCEJL69Kne+3v0SHg5a489+DC65prYAOJzYVdBSQGImhxfUM3nkZfFB3DGDLYtuH8iAZaPPpof/2bPJigWgOUyiV268D1Q15MHELv/6F3cdYyLLooNoHH++XxSPXBgwsZA0yT9zDOx18E//IAB6CXRbmtCjoMfJtDWprbbbvUBiNzNuOCCBqNMhF04zGpBVwPmtdfWejIBFedm90dv0089ldTttkOtMOgz4MBTOo92YH1MjsMBjNXq5pun82yMPG0akaLU9WwMIsj5/PP0AVQWLiT355/jPt7Gw/v003SdzsLGknH55cQo/nrgYYc1bOQnHiBmQWWDDci48kok1cSJn4VrHzIwwThffNFiFWlsdof3ihVkXHYZNrXJfvVVcn//nWoUjqvhgFAo4/4AZVx8MTbNcXyNHWujBZiJAZjPa6uEWZ8+lKm5RJ8KDtjhv3Kf+ia0DzxAmf6RWeEsj8fuE/TAy3wH2mKR1J12Iu2YY1q11R13BAtfgGCHv/hPrm0myyzncpMETwjjezMg4QxmAgRJbdvmvO74WQYmmMFKatdufaGp1FyujUf1hQxQdYMRWAl+ouOPX13K57cXc7mXPLsZsH8MFp5f9NhsB0ZCEP3ZseO6SqEw0PvS+NZsMACLSpz+Aum+Wjn7fOhMAAAAAElFTkSuQmCC';

const EmailHeader = () => {
  return (
    <Wrapper className="dbx-email-header">
      <img src={dbLogo} alt="Deutsche Bahn" className="dbx-email-header-logo" />
    </Wrapper>
  );
};

export default EmailHeader;
