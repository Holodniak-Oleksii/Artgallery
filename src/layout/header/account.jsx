import { IconClose, IconPerson } from '@/components/icons';
import { useUser } from '@/store/selectors';
import { AccountBtn, Group } from './style';
import { useRouter } from 'next/router';

const Account = () => {
  const { userID } = useUser();
  const { push } = useRouter();
  return (
    <Group>
      <AccountBtn
        className="revert"
        onClick={() => push(`/create`)}
      >
        <IconClose size={16} />
      </AccountBtn>
      <AccountBtn onClick={() => push(`/profile/${userID}`)}>
        <IconPerson size={24} />
      </AccountBtn>
    </Group>
  );
};

export default Account;
