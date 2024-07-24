"""empty message

Revision ID: 047479cdbafb
Revises: ae1ecb8f6bdb
Create Date: 2024-07-23 02:13:06.455531

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '047479cdbafb'
down_revision: Union[str, None] = 'ae1ecb8f6bdb'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_column('perfume_volume', 'volume')


def downgrade() -> None:
    pass