"""empty message

Revision ID: d71040919c8e
Revises: 0fe1fa6f974e
Create Date: 2024-07-18 05:07:47.294866

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd71040919c8e'
down_revision: Union[str, None] = '0fe1fa6f974e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart', sa.Column('issue_date', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart', 'issue_date')
    # ### end Alembic commands ###
