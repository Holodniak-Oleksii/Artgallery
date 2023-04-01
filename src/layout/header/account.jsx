import { useRouter } from 'next/router';

import { IconClose, IconLogOut, IconPerson } from '@/components/icons';
import { useUser } from '@/store/selectors';
import { logoutUserAction } from '@/store/actions/user';

import { AccountBtn, Group } from './style';

const Account = () => {
  const { userID } = useUser();
  const { push } = useRouter();
  return (
    <Group>
      <AccountBtn
        className="revert"
        onClick={() => push(`/create`)}
      >
        <IconClose size={14} />
      </AccountBtn>
      <AccountBtn onClick={() => push(`/profile/${userID}`)}>
        <IconPerson size={24} />
      </AccountBtn>
      <AccountBtn onClick={logoutUserAction}>
        <IconLogOut size={24} />
      </AccountBtn>
    </Group>
  );
};

export default Account;
